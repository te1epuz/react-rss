import { describe, it } from 'vitest';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home from '../pages/Home';
import { BrowserRouter } from 'react-router-dom';
import SearchResults from '../components/Home/SearchResults';

const searchResults = {
  info: {
    count: 29,
    pages: 2,
    next: 'https://rickandmortyapi.com/api/character/?page=2&name=rick&status=alive',
    prev: null,
  },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
        name: 'Earth',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
      ],
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z',
    },
  ],
};

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
