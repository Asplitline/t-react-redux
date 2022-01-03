import React, { PureComponent } from 'react';
import { createStore } from 'redux';

import reducers from '../reducers';
import actions from '../acitons';

const store = createStore(reducers.math);

console.log(store.dispatch(actions.addAction(1)));
console.log(store.getState());

store.dispatch(actions.addAction(2));
console.log(store.getState());

store.dispatch(actions.squareAciton());
console.log(store.getState());

export default class SplitCode extends PureComponent {
  render() {
    return <div></div>;
  }
}
