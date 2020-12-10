import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { MainContainer } from "./";
import * as actions from "../../store/actions";


export const Quiz = () => {
  const counter = useSelector((state: any) => state.counter, shallowEqual);

  const dispatch = useDispatch();
  const change = () => dispatch(actions.increase());

  return(
    <MainContainer header="It's game time" >
      <section className="quiz">
        <h2 className="placeholder">Coming Soon... Under Construction</h2>
        {window.location.hostname === "localhost" ? (
            <>
              <h3>Quiz Num {counter}</h3>
              <button onClick={change}>Click Here</button>
            </>
          ) : ""
        }
      </section>
    </MainContainer >
  )
};