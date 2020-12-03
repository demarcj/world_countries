import React from "react";
import { NavLink } from "react-router-dom";

export const Nav: React.FC = () => (
  <nav>
    <div className="mobile_menu">&#9776;</div>
    <ul className="nav">
      <li className="nav_item">
        <NavLink className="nav_links" to="/world_countries/world_countries">Home</NavLink>
      </li>
      <li className="nav_item">
        <NavLink className="nav_links" to="/world_countries/quiz">Quiz</NavLink>
      </li>
      <li className="nav_item">
        <NavLink className="nav_links" to="/world_countries/login">Login</NavLink>
      </li>
    </ul>
  </nav>
);