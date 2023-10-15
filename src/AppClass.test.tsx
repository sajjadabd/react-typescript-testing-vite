// Import necessary dependencies
/*
import { render, screen, fireEvent } from '@testing-library/react';
import { test , expect } from 'vitest';
import '@testing-library/jest-dom'
import AppClass from './AppClass';

test('increments count when the button is clicked', () => {
  render(<AppClass />);

  // Find the initial count value
  const countElement = screen.getByText('Count: 0');

  // Find the button and click it
  const button = screen.getByText('Increment');
  fireEvent.click(button);

  // Verify that the count has increased
  expect(countElement).toHaveTextContent('Count: 1');
});

*/

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { test , expect } from 'vitest';

import App from './App';
import AppClass from './AppClass';

test('simple test to check everything works fine' , () => {
  expect(2).toBe(2);
})


test('increments count when the button is clicked - FC', () => {
  render(<App />);

  // Find the initial count value
  const countElement = screen.getByText('count is 0');

  // Find the button and click it
  const button = screen.getByTestId('increment');
  fireEvent.click(button);

  // Verify that the count has increased
  expect(countElement).toHaveTextContent('count is 1');
} );



test('increments count when the button is clicked - Class Component', () => {
  render(<AppClass initialCount={0} />);

  // Find the initial count value
  const countElement = screen.getByText('count is 0');

  // Find the button and click it
  const button = screen.getByTestId('increment');
  fireEvent.click(button);

  // Verify that the count has increased
  expect(countElement).toHaveTextContent('count is 1');
} );



test('increments count when the button is clicked - Class Component - initial state', () => {
  // Render the component with the desired initial state
  render(<AppClass initialCount={4} />);

  // Find the initial count value
  const countElement = screen.getByText('count is 4');

  // Find the button and click it
  const button = screen.getByTestId('increment');
  fireEvent.click(button);

  // Verify that the count has increased
  expect(countElement).toHaveTextContent('count is 5');
});