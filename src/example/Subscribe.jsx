import React, { PureComponent } from 'react';
import { createStore } from 'redux';

import reducers from '../reducers';
import actions from '../acitons';

const store = createStore(reducers.math);

// console.log(store.dispatch(actions.addAction(1)));
// console.log(store.getState());

// store.dispatch(actions.addAction(2));
// console.log(store.getState());

// store.dispatch(actions.squareAciton());
// console.log(store.getState());

// ques 通过 subsribe 在数据更新后重新渲染
export default class SplitCode extends PureComponent {
  constructor(props) {
    super(props);
    store.subscribe(this.render());
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>{store.getState() || 0}</p>
        <button
          onClick={() => {
            store.dispatch(actions.addAction(1));
            console.log(store.getState());
          }}
        >
          addOne
        </button>
        <button
          onClick={() => {
            store.dispatch(actions.addAction(2));
            console.log(store.getState());
          }}
        >
          addTwo
        </button>
        <button
          onClick={() => {
            store.dispatch(actions.squareAciton());
            console.log(store.getState());
          }}
        >
          square
        </button>
      </div>
    );
  }
}
