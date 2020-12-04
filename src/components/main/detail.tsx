import React from "react";
import { Link } from "react-router-dom";

interface T{
  flag: any,
  abbrev_list: object[],
  back_handler: () => void
}

export const Detail: React.FC <T> = props => {
  const { flag, abbrev_list, back_handler } = props;
  const domain_length = flag.topLevelDomain.length;
  const currency_length = flag.currencies.length;
  const lang_length = flag.languages.length;

  return (
    <section className="detail_page">
      <Link 
        className="back_link block_text" 
        to="/"
        onClick={back_handler}
      >
        &lt; Back to Homepage
      </Link>
      <div className="detail_page_content">
        <div className="detail_page_container detail_image_container">
          <img src={flag.flag} className="flag_detail_image" alt={"The flag of " + flag.name} /> 
        </div>
        <div className="detail_page_container detail_info_container">
          <p className="country">{flag.name}</p>
          <div className="detail_info_content detail_info_top">
            <p className="flag_detail population">Population: {new Intl.NumberFormat().format(parseInt(flag.population))}</p>
            <p className="flag_detail region">Region: {flag.region}</p>
            <p className="flag_detail subregion">Sub Region: {flag.subregion}</p>
            <p className="flag_detail capital">Capital: {flag.capital}</p>
          </div>
          <div className="detail_info_content detail_info_bottom">
            <p className="flag_detail domain">Top Level Domain: {flag.topLevelDomain.map((domain:any, i:number) => domain + (domain_length === (i + 1) ? "" : ", "))}</p>
            <p className="flag_detail currencies">Currencies: {flag.currencies.map((currency:any, i:number) => currency.name + (currency_length === (i + 1) ? "" : ", "))}</p>
            <p className="flag_detail languages">Languages: {flag.languages.map((lang:any, i:number) => lang.name + (lang_length === (i + 1) ? "" : ", "))}</p>
          </div>
          <p className="flag_detail border_header">Bordering Countries: {flag.borders.length === 0 ? "None" : ""}</p>
          {abbrev_list.map((abbrev:any, i:number) => flag.borders.includes(abbrev.abbrev) ? <Link className="border block_text" to={"/world_countries/" + abbrev.abbrev} key={"border_" + i}>{abbrev.name}</Link> : "")}
        </div>
      </div>
    </section>
  )
};