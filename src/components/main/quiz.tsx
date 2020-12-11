import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { MainContainer } from "./";
import * as actions from "../../store/actions";


export const Quiz = () => {
  const counter = useSelector((state: any) => state.counter, shallowEqual);
  const const_flags = useSelector((state: any) => state.const_flags, shallowEqual);
  let random_number;

  const dispatch = useDispatch();
  const get_next_item = () => {
    random_number = parseInt(Math.random().toString()) * const_flags.length;
    dispatch(actions.increase())
  };

  return(
    <MainContainer header="It's game time" >
      <section className="quiz">
        <h2 className="placeholder">Coming Soon... Under Construction</h2>
        {window.location.hostname === "localhost" ? (
            <>
              <h3>Quiz Num {random_number}</h3>
              <button onClick={get_next_item}>Click Here</button>
            </>
          ) : ""
        }
      </section>
    </MainContainer >
  )
};