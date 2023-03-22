import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';
import { BrowserRouter } from 'react-router-dom';

describe('About', () => {
  it('Renders h1', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About page');
  });
});
