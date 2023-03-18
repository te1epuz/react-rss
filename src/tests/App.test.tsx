import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  it('Renders h1', () => {
    // ARRANGE
    render(<App />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Vite + React');
  });
});
