import React from "react";
import { MainContainer, BackButton } from "./";

interface T{
  history: any
}

export const NotFound: React.FC <T> = ({history}) => (
  <MainContainer header="Page Not Found">
    <BackButton backer={history.goBack}/>
  </MainContainer>
);