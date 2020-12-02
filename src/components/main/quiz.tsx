import { useSelector, useDispatch, shallowEqual } from "react-redux";

export const Quiz = () => {
  const counter = useSelector((state: any) => state.counter, shallowEqual);
  const dispatch = useDispatch();

  const change = () => {
    dispatch({type: "increase"});
  };

  return(
    <section className="quiz">
      <h2>Quiz Num {counter}</h2>
      <button onClick={change}>Click Here</button>
    </section>
  )
};