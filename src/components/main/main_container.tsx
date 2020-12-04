import React from "react";

interface T{
  header: string
}

export const MainContainer: React.FC <T> = props => (
  <div className="container"> 
    <h1 className="header_main">{props.header}</h1>
    {props.children}
  </div>
);