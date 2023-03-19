import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';
import { BrowserRouter } from 'react-router-dom';

describe('About', () => {
  it('Renders h1', () => {
    // ARRANGE
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About page');
  });
});
