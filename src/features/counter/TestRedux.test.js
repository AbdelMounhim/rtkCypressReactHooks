import React from 'react';
// import { Counter } from './Counter'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react'
import reducer from './counterSlice'
import TestRedux from './TestRedux'

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}


 afterEach(cleanup);

xit('checks initial state is equal to 0', () => {
    const { getByTestId } = renderWithRedux(<TestRedux />)
    expect(getByTestId('counter').textContent).toBe(0)
  })

xit('increments the counter through redux', () => {
  const { getByTestId } = renderWithRedux(<TestRedux />, {initialState: {count: 5} })
  fireEvent.click(getByTestId('button-up'))
  expect(getByTestId('counter')).toHaveTextContent('6')
})

xit('decrements the counter through redux', () => {
  const { getByTestId } = renderWithRedux(<TestRedux />, {initialState: { count: 100 } })
  fireEvent.click(getByTestId('button-down'))
  expect(getByTestId('counter')).toHaveTextContent('99')
})
/*
    it('should equal to 0', () => {
        const { getByTestId } = render(<Counter />); 
        expect(getByTestId('counter')).toHaveTextContent(0)
    });
*/