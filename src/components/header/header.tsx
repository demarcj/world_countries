import React from "react";
import { Nav } from "./index";
import "./header.css";

interface T{
  color_mode: string,
  color_mode_handler: () => void
}

export const Header: React.FC<T> = props => {
  const {color_mode, color_mode_handler} = props;

  return(
    <header>
      <div className="header container">  
        {window.location.hostname === "localhost" ? <Nav /> : <nav></nav>}
        <div className="right_header">
          <p 
            className="color_mode"
            onClick={color_mode_handler}
          >
            {color_mode.replaceAll("_", " ")}
          </p>
        </div>
      </div>
    </header>
  );
};