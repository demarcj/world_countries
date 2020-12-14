import * as actions from "../actions/action"

export const inital_state = {
  counter: 0,
  flags: [],
  search: "",
  option: "",
  const_flags: [],
  abbrev_list: [{}],
  random_number: 0
}

export const reducer = (state: any = inital_state, action: any) => {
  const is_action = (dis: string) => action.type === dis; 

  return (
    is_action(actions.increase) ? { ...state, counter: action.val } :
    is_action(actions.set_flags) ? { ...state, flags: action.val } : 
    is_action(actions.set_search) ? {...state, search: action.val } : 
    is_action(actions.set_option) ? {...state, option: action.val } : 
    is_action(actions.get_number) ? {...state, random_number: action.val } : 
    is_action(actions.set_const_flags) ? {...state, const_flags: action.val } : 
    is_action(actions.set_abbrev) ? {...state, abbrev_list: action.val } : state
  )
};