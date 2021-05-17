import React from 'react';
import { Counter } from './Counter'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import reducer from './counterSlice'
import renderWithRedux from '../../test-utils'
/*
const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}
*/


 afterEach(cleanup);

it('checks initial state is equal to 0', () => {
   renderWithRedux(<Counter />)
      expect(screen.getByText(/redux user/i)).toBeInTheDocument()

    //expect(getByTestId('counter')).toHaveTextContent('0')
  })

xit('increments the counter through redux', () => {
  const { getByTestId } = renderWithRedux(<Counter />, {initialState: {count: 5} })
  fireEvent.click(getByTestId('button-up'))
  expect(getByTestId('counter')).toHaveTextContent('6')
})

xit('decrements the counter through redux', () => {
  const { getByTestId } = renderWithRedux(<Counter />, {initialState: { count: 100 } })
  fireEvent.click(getByTestId('button-down'))
  expect(getByTestId('counter')).toHaveTextContent('99')
})
