import types from '../constants';

const math = (state = 10, action) => {
  switch (action.type) {
    case types.ADD:
      return state + action.value
    case types.SQUARE:
      return state * state
    case types.GET:
      return action.value
    default:
      return state
  }
}

export default {
  math
}