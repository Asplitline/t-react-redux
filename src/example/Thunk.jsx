import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import actionTypes from '../acitons';
class Thunk extends PureComponent {
  render() {
    const { add, square, get, num } = this.props;
    return (
      <div>
        <p>num: {num}</p>
        <button onClick={() => add(1)}>addOne</button>
        <button onClick={() => add(2)}>addTwo</button>
        <button onClick={() => square()}>square</button>
        <button onClick={() => get()}>get</button>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    num: state,
  };
};

const mapDispatch = (dispatch) => {
  return {
    get: () => dispatch(actionTypes.getAction()),
    add: (num) => dispatch(actionTypes.addAction(num)),
    square: () => dispatch(actionTypes.squareAciton()),
  };
};

export default connect(mapState, mapDispatch)(Thunk);
