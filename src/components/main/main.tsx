import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Detail } from "./";
import "./style.css";

export const Main: React.FC = () => {
  const [flags, set_flags] = useState([]);
  const [const_flags, set_const_flags] = useState([]);
  const [option, set_option] = useState("");
  const [search, set_search] = useState("");

  const continents = [`Filter by Region`, `Americas`, `Africa`, `Asia`, `Europe`, `Oceania`];

  React.useEffect(() => {
    const get_flags = async () => {
      const fetch_flags = await fetch(`https://restcountries.eu/rest/v2/all`);
      const data = await fetch_flags.json();
      set_flags(data);
      set_const_flags(data);
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

  const search_handler = (e: any) => {
    const val = e.target.value.toLowerCase();
    set_search(val);
    set_flags(filter_handler(option, val));
  };

  const option_handler = (str: string) => { 
    set_option(str);
    set_flags(filter_handler(str, search));
  }
  return(
    <BrowserRouter>
      <main>
        <div className="container"> 
          <Switch>         
            {flags.map((flag: any, i:number) => (
                <Route key={"route_" + i} path={"/" + flag.alpha3Code}>
                  <Detail flag={flag}/>
                </Route >
              )
            )}
            <Route path="/">
              <Home  
                flags={flags}
                search_handler={search_handler}
                option_handler={option_handler}
                continents={continents}
              />
            </Route>
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  );
};