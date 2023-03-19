import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import { BrowserRouter } from 'react-router-dom';

describe('NotFound', () => {
  it('Renders h1', () => {
    // ARRANGE
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('404 page');
  });
});
