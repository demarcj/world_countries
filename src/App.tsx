import React, { useState } from 'react';
import './App.css';
import { Header } from "./components/header";
import { Main } from "./components/main"
import { Footer } from "./components/footer";

const App = () => {
  const [color_mode, set_color_mode] = useState(localStorage.getItem("color_mode"));
  
  const color_mode_handler = () => {
    const get_color_mode = color_mode === null || color_mode === "dark_mode" ? "light_mode" : "dark_mode";
    localStorage.setItem("color_mode", get_color_mode);
    set_color_mode(get_color_mode);
  };

  return (
    <div 
      id="color_mode" 
      className={color_mode === "light_mode" ? "light_mode" : "dark_mode"}
    >
      <Header 
        color_mode={color_mode === "light_mode" ? "Dark Mode" : "Light Mode"}
        color_mode_handler={color_mode_handler}
      />
      <Main />
      <Footer />
    </div>
  );
}

export default App;