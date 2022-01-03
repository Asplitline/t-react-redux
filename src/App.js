
import React, { Component } from 'react'
import { Provider } from 'react-redux';
// import Base from './example/Base';
// import SplitCode from './example/SplitCode';
// import Subscribe from './example/Subscribe';
import Thunk from './example/Thunk';
import ProviderDemo from './example/Provider';
import { createStore } from 'redux';
import reducers from './reducers';

// const store = createStore(reducers.math)

import store from './store';

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          {/* <Base /> */}
          {/* <SplitCode /> */}
          {/* <Subscribe /> */}
          {/* <ProviderDemo /> */}
          <Thunk />
        </div>
      </Provider>
    )
  }
}
