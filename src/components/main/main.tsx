import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Home, Detail, Quiz, Login, NotFound } from "./";
import "./main.css";

export const Main: React.FC = () => {
  const [flags, set_flags] = useState([]);
  const [const_flags, set_const_flags] = useState([]);
  const [option, set_option] = useState("");
  const [search, set_search] = useState("");
  const [abbrev_list, set_abbrev] = useState([{}]);

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
        <div className="container"> 
          <h1 className="header_main">Where in the world?</h1>
          <Switch>    
            <Route path="/world_countries/quiz">
              <Quiz />
            </Route>
            <Route path="/world_countries/login">
              <Login />
            </Route>   
            {flags.map((flag: any, i:number) => (
              <Route key={"route_" + i} path={"/world_countries/world_countries/" + flag.alpha3Code}>
                <Detail 
                  flag={flag}
                  abbrev_list={abbrev_list}
                  back_handler={back_handler}
                />
              </Route >
              )
            )}  
            <Route path="/world_countries/world_countries" >
              <Home  
                flags={flags}
                search_handler={search_handler}
                option_handler={option_handler}
                continents={continents}
              />
            </Route>      
            <Redirect from="/world_countries" to="/world_countries/world_countries" />
            <Route component={NotFound} />          
          </Switch>
        </div>
      </main>
  );
};