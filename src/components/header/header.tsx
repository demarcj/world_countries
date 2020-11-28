import React from "react";
import { Nav } from "./index";
import "./header.css";

export const Header: React.FC = () => (
  <header>
    <div className="header container">  
      {window.location.hostname === "localhost" ? <Nav /> : ""}
      {window.location.hostname === "localhost" ? <div className="right_header"><p className="color_mode">Light Mode</p></div>: ""}
    </div>
  </header>
);