import React from "react";
import { Link } from "react-router-dom";

export const Nav: React.FC = () => (
    <nav>
      <ul className="nav">
        <li className="nav_item">
          <Link className="nav_links" to="/world_countries">Home</Link>
        </li>
        <li className="nav_item">
          <Link className="nav_links" to="/quiz">Quiz</Link>
        </li>
        <li className="nav_item">
          <Link className="nav_links" to="login">Login</Link>
        </li>
      </ul>
    </nav>
);