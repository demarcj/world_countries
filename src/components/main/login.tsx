import { MainContainer } from "./";

export const Login = () => (
  <MainContainer header="Login" >
    <section className="login"> 
      <h2 className="placeholder">Coming Soon... Under Construction</h2>
      <form action="/profile" method="post">
        <label htmlFor="username">Username</label>
        <input 
          type="text"
          name="username"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name="password" 
          id="password"
        />
        <input type="submit" value="Login"/>
      </form>
    </section>
  </MainContainer>
)

