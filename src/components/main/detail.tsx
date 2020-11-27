import React from "react";
import { NavLink } from "react-router-dom";

interface T{
  flag: any
}

export const Detail: React.FC <T> = props => {
  const flag = props.flag;
  const domain_length = flag.topLevelDomain.length;
  const currency_length = flag.currencies.length;
  const lang_length = flag.languages.length;
  return (
    <section className="detail_page">
      <NavLink className="back_link" to="/">&lt; Back</NavLink>
      <div className="detail_page_content">
        <div className="detail_page_container detail_image_container">
          <img src={flag.flag} className="flag_detail_image" alt={"The flag of " + flag.name} /> 
        </div>
        <div className="detail_page_container detail_info_container">
          <p className="country">{flag.name}</p>
          <p className="flag_detail population">Population: {new Intl.NumberFormat().format(parseInt(flag.population))}</p>
          <p className="flag_detail region">Region: {flag.region}</p>
          <p className="flag_detail region">Sub Region: {flag.subregion}</p>
          <p className="flag_detail capital">Capital: {flag.capital}</p>
          <p className="flag_detail capital">Top Level Domain: {flag.topLevelDomain.map((domain:any, i:number) => domain + (domain_length === (i + 1) ? "" : ", "))}</p>
          <p className="flag_detail capital">Currencies: {flag.currencies.map((currency:any, i:number) => currency.name + (currency_length === (i + 1) ? "" : ", "))}</p>
          <p className="flag_detail capital">Languages: {flag.languages.map((lang:any, i:number) => lang.name + (lang_length === (i + 1) ? "" : ", "))}</p>
        </div>
      </div>
    </section>
  )
};