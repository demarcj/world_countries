import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { Home, Detail, Quiz, Login, NotFound } from "./";
import "./main.scss";

export const Main: React.FC = () => {
  const flags = useSelector((state: any) => state.flags, shallowEqual);

  return(
    <main>
      <Switch>    
        <Route path="/quiz" component={Quiz} />
        <Route path="/login" component={Login} />          
        {flags.map((flag: any, i:number) => (
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
};