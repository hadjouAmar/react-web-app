import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-link');
  expect(linkElement).toBeInTheDocument();
});

test('validate the page url', () => {
  render(<App />)
  const linkElement = screen.getByTestId('learn-link');
  expect(linkElement.href).toContain('ultimateqa.com')
});

test('validate that the Learn React URL opens in a new tab', () => {
  render(<App />)
  const linkElement = screen.getByTestId('learn-link');
  expect(linkElement.target).toContain('_blank');
});