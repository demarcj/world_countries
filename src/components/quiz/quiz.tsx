import React, { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { MainContainer } from "../main";
import styles from "./quiz.module.scss";
import * as actions from "../../store/actions";

export const Quiz = () => {
  const const_flags = useSelector( (state: any) => state.const_flags, shallowEqual );
  const counter = useSelector((state: any) => state.counter, shallowEqual);
  const random_number = useSelector( (state: any) => state.random_number, shallowEqual );

  const dispatch = useDispatch();
  const set_const_flags = (val: any) => dispatch(actions.set_const_flags(val));

  const [country_name, set_country_name] = useState("");
  const [correct, set_correct] = useState("");
  const [show_quiz, set_show_quiz] = useState(true);

  const flag: any = const_flags[random_number];

  const get_next_item = (e: any) => {
    e.preventDefault();
    const is_correct = country_name.toLowerCase() === flag.name.toLowerCase() ? "Correct" : "Wrong";
    const turn_num = (counter + 1) % 10;
    const restart_quiz = turn_num === 0;
    set_correct(is_correct);
    set_show_quiz(restart_quiz);
    dispatch( actions.get_number(Math.round(Math.random() * const_flags.length)) );
    dispatch(actions.increase(turn_num));
  };

  React.useEffect(() => {
    const get_flags = async () => {
      const fetch_flags = await fetch(`https://restcountries.eu/rest/v2/all`);
      const data = await fetch_flags.json();
      set_const_flags(data);
    };
    get_flags();
  }, []);

  const search_handler = (e: any) => set_country_name(e.target.value);
  const start_handler = () => set_show_quiz(false);

  return (
    <MainContainer header="It's game time">
      <section className={styles.quiz}>
        {show_quiz ? (
          <>
            <p>Start Game</p>
            <button className={styles.start} onClick={start_handler}>Start</button>
            <button>Different Game</button>
          </>
        ) : (
          <>
            <h2>Name this Country</h2>
            <h2>{flag === undefined ? "" : flag.name}</h2>
            <h2>{correct}</h2>
            <img
              className={styles.quiz_image}
              src={flag === undefined ? "" : flag.flag}
              alt={"The flag of " + (flag === undefined ? "" : flag.name)}
            />
            <form>
              <input
                type="search"
                name="search"
                id="search"
                className={styles.search}
                placeholder="Name this Country"
                onChange={search_handler}
              />
              <button className={styles.quiz_button} onClick={get_next_item}>
                Submit
              </button>
            </form>
          </>
        )}
      </section>
    </MainContainer>
  );
};
