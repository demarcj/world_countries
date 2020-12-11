import * as action from './action'

export const get_number = (value: any) => {
  return {
    type: action.get_number,
    val: value
  }
}