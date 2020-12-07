import React from "react";
import { MainContainer, BackButton } from "./";

interface T{
  back_handler: () => void
}

export const NotFound: React.FC <T> = props => (
  <MainContainer header="Page Not Found">
    <BackButton back_handler={props.back_handler} />
  </MainContainer>
);