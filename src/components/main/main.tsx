import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home, Detail, NotFound } from "./";
import { Quiz } from "../quiz";
import { Login } from "../login";
import "./main.scss";

interface T { const_flags: any; }

export const Main: React.FC<T> = ({const_flags}) => (
  <main>
    <Switch>
      <Route path="/quiz" component={Quiz} />
      <Route path="/login" component={Login} />
      {const_flags.map((flag: any, i: number) => (
        <Route
          key={"route_" + i}
          path={"/world_countries/" + flag.alpha3Code}
          component={Detail}
        />
      ))}
      {/* <Route path="/world_countries">
        <Redirect from="/world_countries" to="/" />
      </Route> */}
      <Route path="/world_countries" component={Home} exact />
      <Route component={NotFound} />
    </Switch>
  </main>
);
