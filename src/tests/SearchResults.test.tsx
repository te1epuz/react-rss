import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
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

describe('ResultsList', () => {
  it('Renders list of results', () => {
    render(
      <BrowserRouter>
        <SearchResults searchText={''} searchResults={searchResults} />
      </BrowserRouter>
    );
    expect(screen.getByTestId('results__list')).toBeInTheDocument();
  });
});
