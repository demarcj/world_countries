import React from "react";
import { NavLink } from "react-router-dom";

interface T{
  flag: any
}

export const Detail: React.FC <T> = props => (
  <section className="detail_page">
    <NavLink className="back_link" to="/">&lt; Back</NavLink>
    <div className="detail_page_content">
      <div className="detail_page_container detail_image_container">
        <img src={props.flag.flag} className="flag_detail_image" alt={"The flag of " + props.flag.name} /> 
      </div>
      <div className="detail_page_container detail_info_container">
        <p className="country">{props.flag.name}</p>
        <p className="flag_detail population">Population: {new Intl.NumberFormat().format(parseInt(props.flag.population))}</p>
        <p className="flag_detail region">Region: {props.flag.region}</p>
        <p className="flag_detail region">Sub Region: {props.flag.subregion}</p>
        <p className="flag_detail capital">Capital: {props.flag.capital}</p>
        <p className="flag_detail capital">Top Level Domain: {props.flag.topLevelDomain[0]}</p>
        <p className="flag_detail capital">Currencies: {props.flag.currencies[0].name}</p>
        <p className="flag_detail capital">Languages: {props.flag.languages[0].name}</p>
      </div>
    </div>
  </section>
);