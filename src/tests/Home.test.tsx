import { describe, it } from 'vitest';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home from '../pages/Home';
import { BrowserRouter } from 'react-router-dom';

describe('Home', () => {
  it('Renders h1', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home page');
  });

  it('Renders list of results', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const result = await waitFor(() => screen.getByTestId('results__list'));
    expect(result).toBeInTheDocument();
  });

  it('Renders searh result card', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toBeInTheDocument();
  });

  it('Renders overlay', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    await waitFor(() => screen.getByRole('card'));
    await act(async () => {
      fireEvent.click(screen.getByRole('card'));
    });
    const result = await waitFor(() => screen.getByRole('charName'));
    expect(result).toHaveTextContent('Rick Sanchez');
  });
});
