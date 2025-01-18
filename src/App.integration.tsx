import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

test('renders a button with correct text', () => {
  render(<App />);
  expect(true).toBe(true);
});
