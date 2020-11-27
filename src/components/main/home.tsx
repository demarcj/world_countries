import React from "react";
import { NavLink } from "react-router-dom";

interface T{
  search_handler:(e: any) => void,
  option_handler:(str: string) => void,
  flags: string[],
  continents: string[],
}

export const Home: React.FC <T> = props => (
  <>
    <section className="filter_section">
      <div className="search_container filter_container">
        <input 
          type="search" 
          name="search" 
          id="search" 
          className="search"
          placeholder="Search for a country..."
          onKeyUp={props.search_handler}
        />
      </div>
      <div className="continents_container filter_container">
        <select 
          name="continents" 
          id="continents"
          className="continents"
        >
          {props.continents.map((continent, i) => (
            <option 
              key={i} 
              value={continent}
              onClick={() => props.option_handler(continent)}
              className="continent"
            >
              {continent}
            </option>
          ))}
        </select>
      </div>
    </section>
    <section className="flag_container">
      {props.flags.map((flag:any, i:any) => (
          <NavLink to={"/" + flag.alpha3Code} key={"flag_" + i} className="flag_item">
            <img src={flag.flag} className="flag_image" alt={"The flag of " + flag.name} /> 
            <div className="flag_content">
              <p className="country">{flag.name}</p>
              <div className="flag_detail_container">
                <p className="flag_detail population">Population: {new Intl.NumberFormat().format(parseInt(flag.population))}</p>
                <p className="flag_detail region">Region: {flag.region}</p>
                <p className="flag_detail capital">Capital: {flag.capital}</p>
              </div>
            </div>
          </NavLink>
        )
      )}
    </section>
  </>
);