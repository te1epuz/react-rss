import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { getAllProducts } from '../services/api';

describe('Home', () => {
  it('Renders h1', () => {
    // ARRANGE
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home page');
  });
  it('gets list of products form server', () => {
    // ARRANGE
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    // ACT
    // EXPECT
    expect(getAllProducts).toHaveBeenCalled;
  });
});
