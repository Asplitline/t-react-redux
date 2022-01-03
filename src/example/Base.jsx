import React, { PureComponent } from 'react';
import { createStore } from 'redux';

const addOne = {
  type: 'ADD_ONE',
  value: 1,
};
const addTwo = {
  type: 'ADD_TWO',
  value: 2,
};

const square = {
  type: 'SQUARE',
};

const reducer = (state = 10, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_ONE':
      return state + action.value;
    case 'ADD_TWO':
      return state + action.value;
    case 'SQUARE':
      return state * state;
    default:
      return state;
  }
};

// 每次getState都会调用reducer
const store = createStore(reducer);
console.log(store.getState());

// dispath 默认返回当前action
console.log(store.dispatch(addOne));
console.log(store.getState());

store.dispatch(addTwo);
console.log(store.getState());

store.dispatch(square);
console.log(store.getState());

export default class Base extends PureComponent {
  render() {
    return <div>132</div>;
  }
}
