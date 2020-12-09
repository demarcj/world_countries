import React from "react";
import { MainContainer } from "./";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import * as actions from "../../store/actions";
import { Link } from "react-router-dom";

export const Home = () => {
  const continents = [`Filter by Region`, `Americas`, `Africa`, `Asia`, `Europe`, `Oceania`, `Polar`];

  const flags = useSelector((state: any) => state.flags, shallowEqual);
  const search = useSelector((state: any) => state.search, shallowEqual);
  const const_flags = useSelector((state: any) => state.const_flags, shallowEqual);
  const option = useSelector((state: any) => state.option, shallowEqual);

  const dispatch = useDispatch();
  const set_option = (val: any) => dispatch(actions.set_option(val));
  const set_flags = (val: any) => dispatch(actions.set_flags(val));
  const set_search = (val: any) => dispatch(actions.set_search(val));

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

  return (
    <MainContainer header={"Learn about different countries"} > 
      <section className="filter_section">
        <div className="search_container filter_container">
          <input 
            type="search" 
            name="search"
            id="search" 
            className="search"
            placeholder="Search for a country..."
            onChange={e => search_handler(e.target.value.toLowerCase())}
          />
        </div>
        <div className="continents_container filter_container">
          <select 
            name="continents" 
            id="continents"
            className="continents"
            onChange={e => option_handler(e.target.value)}
          >
            {continents.map((continent, i) => (
              <option key={i} value={continent} className="continent" >
                {continent}
              </option>
            ))}
          </select>
          <div className="select_arrow"></div>
        </div>
      </section>
      <section className="flag_container">
        {flags.map((flag:any, i:any) => (
          <Link to={"/world_countries/" + flag.alpha3Code} key={"flag_" + i} className="flag_item">
            <img src={flag.flag} className="flag_image" alt={"The flag of " + flag.name} /> 
            <div className="flag_content">
              <p className="country">{flag.name}</p>
              <div className="flag_detail_container">
                <p className="flag_detail population">Population: {new Intl.NumberFormat().format(parseInt(flag.population))}</p>
                <p className="flag_detail region">Region: {flag.region}</p>
                <p className="flag_detail capital">Capital: {flag.capital}</p>
              </div>
            </div>
          </Link>
          )
        )}
      </section>
    </MainContainer > 
  )
};