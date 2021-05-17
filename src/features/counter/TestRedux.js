import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './counterSlice'
const TestRedux = ({counter, dispatch}) => {

  
 return (
  <>
    <h1 data-testid="counter">ici{counter}</h1>
    <button data-testid="button-up" onClick={() => dispatch(increment()) }>Up</button>
    <button data-testid="button-down" onClick={() => dispatch(decrement()) }>Down</button>
 </>
    )
  }
  
export default connect(state => ({ counter: state.counter.value }))(TestRedux)