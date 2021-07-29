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
  
  const flag: any = const_flags[random_number];
  const [new_sort, set_new_sort] = useState([]);

  const [country_name, set_country_name] = useState("");
  const [correct, set_correct] = useState("");
  const [show_quiz, set_show_quiz] = useState(true);

  
  const [test, set_test] = useState([
    const_flags[Math.round(Math.random() * const_flags.length)].name, 
    const_flags[Math.round(Math.random() * const_flags.length)].name, 
    const_flags[Math.round(Math.random() * const_flags.length)].name, 
    const_flags[Math.round(Math.random() * const_flags.length)].name, 
    `test5`
  ]);
  
  const get_test = () => {    
    const temp = [...test];
    const temp_sort: any = [];
    set_new_sort([]);
    test.forEach(item => {
      const size = (test.length - temp_sort.length);
      const random_sort = Math.floor((Math.random() * 10) %  size);
      temp_sort.push(temp[random_sort]);
      temp.splice(random_sort, 1);
    });
    set_new_sort(temp_sort);
  }

  const get_next_item = (e: any) => {
    e.preventDefault();
    const is_correct = country_name === flag.name ? "Correct" : "Wrong";
    const turn_num = (counter + 1) % 10;
    const restart_quiz = turn_num === 0;
    set_correct(is_correct);
    set_show_quiz(restart_quiz);
    dispatch(actions.get_number(Math.round(Math.random() * const_flags.length)));
    dispatch(actions.increase(turn_num));
    get_test();
    document.querySelectorAll('input[name="name"]').forEach((item: any) => {
      item.checked = false;
    })

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
  const start_handler = () => {
    get_test();
    set_show_quiz(false);
  };

  return (
    <MainContainer header="It's game time">
      <section className={styles.quiz}>
        {show_quiz ? (
          <>
            <p>Start Game</p>
            <button className={styles.start} onClick={start_handler}>Start</button>
            {/* <button>Different Game</button> */}
          </>
        ) : (
          <>
            <h2>Pick the name of this Country</h2>
            <h2>{flag === undefined ? "" : flag.name}</h2>
            <h2>{correct}</h2>
            <img
              className={styles.quiz_image}
              src={flag === undefined ? "" : flag.flag}
              alt={"The flag of " + (flag === undefined ? "" : flag.name)}
            />
            <form id="country_name">
              {new_sort.map((item:any, i:any) => (
                <>
                  <label htmlFor={(item === `test5` ? flag.name : item)}>
                    <input 
                      type="radio" 
                      name="name"
                      id={(item === `test5` ? flag.name : item)} 
                      key={"test" + i}
                      onChange={search_handler}
                      value={(item === `test5` ? flag.name : item)}
                    /> 
                    {" " + (item === `test5` ? flag.name : item)}
                  </label>
                </>
              ))}
              
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
