import React from "react";

interface T{ header: string }

export const MainContainer: React.FC <T> = ({header, children}) => (
  <div className="container"> 
    <h1 className="header_main">{header}</h1>
    {children}
  </div>
);