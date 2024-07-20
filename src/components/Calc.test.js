import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calc from './components/Calc';

test('renders calculator', () => {
  render(<Calc />);
  const addButton = screen.getByText('+');
  expect(addButton).toBeInTheDocument();
});

test('adds two numbers', () => {
  render(<Calc />);
  fireEvent.change(screen.getByLabelText(/number1/i), { target: { value: '5' } });
  fireEvent.change(screen.getByLabelText(/number2/i), { target: { value: '3' } });
  fireEvent.click(screen.getByText('+'));
  expect(screen.getByLabelText(/result/i)).toHaveValue('8');
});