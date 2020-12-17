import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import * as actions from "./store/actions";
import { Header } from "./components/header";
import { Main } from "./components/main"
import { Footer } from "./components/footer";
import './App.scss';


const App = () => {
  const const_flags = useSelector((state: any) => state.const_flags, shallowEqual);

  const dispatch = useDispatch();
  const set_flags = (val: any) => dispatch(actions.set_flags(val));
  const set_const_flags = (val: any) => dispatch(actions.set_const_flags(val));
  const set_abbrev = (val: any) => dispatch(actions.set_abbrev(val));

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

  const [color_mode, set_color_mode] = useState(localStorage.getItem("color_mode"));
  
  const color_mode_handler = () => {
    const get_color_mode = color_mode === null || color_mode === "dark_mode" ? "light_mode" : "dark_mode";
    localStorage.setItem("color_mode", get_color_mode);
    set_color_mode(get_color_mode);
  };

  return (
    <div 
      id="color_mode" 
      className={`${color_mode === "light_mode" ? "light_mode" : "dark_mode"} root`}
    >
      <Header 
        color_mode={color_mode === "light_mode" ? "Dark Mode" : "Light Mode"}
        color_mode_handler={color_mode_handler}        
      />
      <Main const_flags={const_flags}/>
      <Footer />
    </div>
  );
}

export default App;