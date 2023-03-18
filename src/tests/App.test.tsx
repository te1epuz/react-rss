import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('Renders h1', () => {
    // ARRANGE
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('home page');
  });
});
