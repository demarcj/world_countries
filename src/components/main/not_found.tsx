import React from "react";
import { MainContainer, BackButton } from "./";

interface T{
  history: any
}

export const NotFound: React.FC <T> = props => (
  <MainContainer header="Page Not Found">
    <BackButton backer={props.history.goBack}/>
  </MainContainer>
);