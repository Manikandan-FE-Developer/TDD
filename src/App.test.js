import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Calculator App header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Calculator App/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders Calc component', () => {
  render(<App />);
  const addButton = screen.getByText('+');
  expect(addButton).toBeInTheDocument();
});