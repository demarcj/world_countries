import { MainContainer } from "../main/main_container";
import styles from "./login.module.scss";

export const Login = () => (
  <MainContainer header="Login" >
    <section className="login"> 
      <h2>Coming Soon... Under Construction</h2>
      <form className={styles.form} action="/profile" method="post">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <input type="submit" value="Login"/>
      </form>
    </section>
  </MainContainer>
)

