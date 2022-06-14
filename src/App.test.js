import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders My TODO header', () => {
  render(<App />);
  const linkElement = screen.getByText(/my todo/i);
  expect(linkElement).toBeInTheDocument();
});
