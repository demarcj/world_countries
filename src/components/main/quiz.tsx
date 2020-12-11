import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { MainContainer } from "./";
import * as actions from "../../store/actions";


export const Quiz = () => {
  const counter = useSelector((state: any) => state.counter, shallowEqual);
  const const_flags = useSelector((state: any) => state.const_flags, shallowEqual);
  const random_number = useSelector((state: any) => state.random_number, shallowEqual);

  const dispatch = useDispatch();
  const get_next_item = () => {
    dispatch(actions.get_number(Math.round(Math.random() * const_flags.length)));
    dispatch(actions.increase());
  };

  const flag = const_flags[random_number];

  return(
    <MainContainer header="It's game time" >
      <section className="quiz">
        <h2 className="placeholder">Coming Soon... Under Construction</h2>
        <h2 className="placeholder">Name this Country</h2>
        
        {window.location.hostname === "localhost" ? (
            <>
              <img className="quiz_image" src={flag.flag} alt={"The flag of " + flag.name}/>
              <form>
                <input 
                  type="search" 
                  name="search"
                  id="search" 
                  className="search"
                  placeholder="Name this Country"
                />
                <button className="quiz_button" onClick={get_next_item}>Submit</button>
              </form>
            </>
          ) : ""
        }
      </section>
    </MainContainer >
  )
};