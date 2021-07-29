import { useState } from "react";
import { MainContainer } from "../main/main_container";
import styles from "./login.module.scss";

export const Login = () => {

  const [info, set_info] = useState("");
  
  const handle_submit = async () => {
    const login = (document.querySelector("#username") as HTMLInputElement).value;
    const password = (document.querySelector("#password") as HTMLInputElement).value;
    try {
      const get_data = await fetch(`https://world-countries-aad9f-default-rtdb.firebaseio.com/login.json`, {
        method: `POST`,
        body: JSON.stringify({
          login: login,
          password: password
        })
      });
      const data = await get_data.json();
      set_info(data.name);
    } catch(e) {
      set_info(`Your login did not go through`);
    }
  }

  return (
    <MainContainer header="Login" >
      <section className="login"> 
        <form className={styles.form} action="/profile" method="post">
          {info === "" ? "" : <h2>{info}</h2>}
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <button 
            className={styles.login} 
            type="button"
            onClick={handle_submit}
          >
            Login
          </button>
        </form>
      </section>
    </MainContainer>
  )
}

