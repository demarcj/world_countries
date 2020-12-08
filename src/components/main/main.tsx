import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Home, Detail, Quiz, Login, NotFound } from "./";
import * as actions from "../../store/actions";
import "./main.scss";

export const Main: React.FC = () => {

  const flags = useSelector((state: any) => state.flags, shallowEqual);
  const const_flags = useSelector((state: any) => state.const_flags, shallowEqual);
  const option = useSelector((state: any) => state.option, shallowEqual);
  const search = useSelector((state: any) => state.search, shallowEqual);
  const abbrev_list = useSelector((state: any) => state.abbrev_list, shallowEqual); 

  const dispatch = useDispatch();
  const set_flags = (val: any) => dispatch(actions.set_flags(val));
  const set_const_flags = (val: any) =>  dispatch(actions.set_const_flags(val));
  const set_search = (val: any) => dispatch(actions.set_search(val));
  const set_option = (val: any) => dispatch(actions.set_option(val));
  const set_abbrev = (val: any) => dispatch(actions.set_abbrev(val));

  const continents = [`Filter by Region`, `Americas`, `Africa`, `Asia`, `Europe`, `Oceania`, `Polar`];

  React.useEffect(() => {
    const get_flags = async () => {
      const fetch_flags = await fetch(`https://restcountries.eu/rest/v2/all`);
      const data = await fetch_flags.json();
      const country_short: any[] = [];
      data.forEach((item: any) => {
        interface work { "name": string, "abbrev": string };
        const obj: work = {"name": "", "abbrev": ""};
        obj["name"] = item.name;
        obj["abbrev"] = item.alpha3Code;
        country_short.push(obj);
      });
      set_flags(data);
      set_const_flags(data);
      set_abbrev(country_short);
    };
    get_flags();
  }, []);

  const filter_handler = (str_option: string, str_search: string) => {
    str_option = str_option === `Filter by Region` ? "" : str_option;
    return( 
      (str_option === "" || str_option === undefined ) && (str_search === "" || str_search === undefined) ? const_flags : 
      const_flags.filter((flag: any) => (
        flag.name.toLowerCase().includes(str_search)) && (flag.region.includes(str_option))
      )
    );
  };

  const search_handler = (search_val: string) => {
    set_search(search_val);
    set_flags(filter_handler(option, search_val));
  };

  const option_handler = (option_val: string) => { 
    set_option(option_val);
    set_flags(filter_handler(option_val, search));
  }

  const back_handler = () => {
    set_flags(const_flags);
  }

  return(
    <main>
      <Switch>    
        <Route path="/quiz" component={Quiz} />
        <Route path="/login" component={Login} />          
        {flags.map((flag: any, i:number) => (
          <Route key={"route_" + i} path={"/world_countries/" + flag.alpha3Code}>
            <Detail 
              flag={flag}
              abbrev_list={abbrev_list}
              back_handler={back_handler}
            />
          </Route >
          )
        )}  
        <Route path="/world_countries" >
          <Redirect from="/world_countries" to="/" />
        </Route>
        <Route path="/" exact>
          <Home  
            flags={flags}
            search_handler={search_handler}
            option_handler={option_handler}
            continents={continents}
          />
        </Route>
        <Route >
          <NotFound back_handler={back_handler} />
        </Route>         
      </Switch>
    </main>
  );
};