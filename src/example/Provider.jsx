import React, { Component } from 'react';
import actionTypes from '../acitons';
// import actionTypes from '../acitons';
import { connect } from 'react-redux';
class provider extends Component {
  render() {
    const { add, square, num } = this.props;
    console.log(num);
    return (
      <div>
        <p>{num}</p>
        <button onClick={() => add(1)}>addOne</button>
        <button onClick={() => add(2)}>addTwo</button>
        <button onClick={() => square()}>square</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    num: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (num) => dispatch(actionTypes.addAction(num)),
    square: () => dispatch(actionTypes.squareAciton()),
  };
};
// 将 state , dispatch 映射 props
export default connect(mapStateToProps, mapDispatchToProps)(provider);
