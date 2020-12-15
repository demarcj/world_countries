import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.scss"

export const Nav: React.FC = () => (
  <nav>
    <ul className={styles.nav}>
      <li className={styles.nav_item}>
        <NavLink className={styles.nav_links} to="/" exact>Home</NavLink>
      </li>
      <li className={styles.nav_item}>
        <NavLink className={styles.nav_links} to="/quiz">Quiz</NavLink>
      </li>
      <li className={styles.nav_item}>
        <NavLink className={styles.nav_links} to="/login">Login</NavLink>
      </li>
    </ul>
  </nav>
);