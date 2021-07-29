import React from "react";
import { Nav } from "./index";
import styles from "./header.module.scss";

interface T{
  color_mode: string,
  color_mode_handler: () => void
}

export const Header: React.FC<T> = props => {
  const {color_mode, color_mode_handler} = props;
  
  return(
    <header>
      <div className={`${styles.header} container`}>  
        <Nav />
        <div className={styles.right_header}>
          <div className={styles.mobile_menu}>&#9776;</div>
          <p 
            className={styles.color_mode}
            onClick={color_mode_handler}
          >
            {color_mode.replaceAll("_", " ")}
          </p>
        </div>
      </div>
    </header>
  );
};