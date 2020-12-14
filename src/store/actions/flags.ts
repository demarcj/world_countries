import * as action from './action'

export const increase = (value: number) => {
  return {
    type: action.increase,
    val: value
  }
}

export const set_flags = (value: any) => {
  return {
    type: action.set_flags,
    val: value
  }
}

export const set_const_flags = (value: any) => {
  return {
    type: action.set_const_flags,
    val: value
  }
}

export const set_option = (value: any) => {
  return {
    type: action.set_option,
    val: value
  }
}

export const set_search = (value: any) => {
  return {
    type: action.set_search,
    val: value
  }
}

export const set_abbrev = (value: any) => {
  return {
    type: action.set_abbrev,
    val: value
  }
}