import React from "react";
import { MainContainer } from "./";
import { Link } from "react-router-dom";

interface T{
  search_handler:(e: string) => void,
  option_handler:(e: string) => void,
  flags: string[],
  continents: string[]
}

export const Home: React.FC <T> = props => {
  const { search_handler, option_handler, flags, continents} = props;

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
              <option 
                key={i} 
                value={continent}              
                className="continent"
              >
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