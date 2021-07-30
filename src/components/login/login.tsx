import { useState } from "react";
import { MainContainer } from "../main/main_container";
import { Link } from "react-router-dom";
import styles from "./login.module.scss";

export const Login = () => {

  const [info, set_info] = useState("");
  
  const handle_submit = async () => {
    const login = (document.querySelector("#username") as HTMLInputElement).value.toLowerCase();
    const password = (document.querySelector("#password") as HTMLInputElement).value;
    try {
      const get_credential = await fetch(`https://world-countries-aad9f-default-rtdb.firebaseio.com/${login}.json`);
      const json_credential = await get_credential.json();
      const credential: any = Object.values(json_credential)[0];
      const is_login = credential.password === password;
      if(is_login){
        set_info(`Hello ${credential.login}`)
      }
    } catch(e) {
      set_info(`Either you're login or password is not correct`);
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
        <p className={styles.signup}>
          Don't have a login? <Link className={styles.signup_link} to="/signup">Sign Up</Link>
        </p>
      </section>
    </MainContainer>
  )
}

