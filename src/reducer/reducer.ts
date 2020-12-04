export const inital_state = {
  counter: 0,
  reduce_search: "",
  reduce_option: "",
  reduce_const_flags: [],
  reduce_abbrev_list: [{}]
}

export const reducer = (state: any = inital_state, action: any) => {
  const get_action: any = {
    "increase":{
      ...state,
      counter: state.counter + 1
    }
  }
  return get_action[action.type] === undefined ? state : get_action[action.type];
};