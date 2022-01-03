import types from '../constants';

const addAction = (num) => {
  return {
    type: types.ADD,
    value: num
  }
}

const squareAciton = (num) => {
  return {
    type: types.SQUARE
  }
}

const getAction = () => {
  return (dispatch, getState) => {
    fetch('./data/demo.json').then(res => res.json()).then(res =>
      dispatch({
        type: types.GET,
        value: res[0]
      }))
  }
}
export default {
  addAction,
  squareAciton,
  getAction
}