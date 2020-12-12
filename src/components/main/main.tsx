import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home, Detail, Quiz, Login, NotFound } from "./";
import "./main.scss";

interface T{
  const_flags: any
}

export const Main: React.FC <T> = props => (
  <main>
    <Switch>    
      <Route path="/quiz" component={Quiz} />
      <Route path="/login" component={Login} />          
      {props.const_flags.map((flag: any, i:number) => (
          <Route 
            key={"route_" + i} 
            path={"/world_countries/" + flag.alpha3Code} 
            component={Detail} 
          />
        )
      )}  
      <Route path="/world_countries" >
        <Redirect from="/world_countries" to="/" />
      </Route>
      <Route path="/" component={Home} exact />
      <Route component={NotFound} />
    </Switch>
  </main>
);