import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import ResultsCard from '../components/Home/ResultsCard';
import { BrowserRouter } from 'react-router-dom';

const result = {
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
};

describe('ResultsCard', () => {
  it('Renders searh result card', () => {
    render(
      <BrowserRouter>
        <ResultsCard searchResult={result} />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole('card'));
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Rick Sanchez');
  });
});
