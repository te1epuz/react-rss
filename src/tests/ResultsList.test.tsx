import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ResultsList from '../components/ResultsList';
import { BrowserRouter } from 'react-router-dom';

const resultsArray = [
  {
    id: 1,
    brand: 'brandString',
    category: 'categoryString',
    description: 'descriptionString',
    discountPercentage: 2,
    images: ['no url'],
    price: 3,
    rating: 4,
    stock: 5,
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    title: 'titleString',
  },
];

describe('ResultsList', () => {
  it('Renders list of results', () => {
    // ARRANGE
    render(
      <BrowserRouter>
        <ResultsList resultsArray={resultsArray} />
      </BrowserRouter>
    );
    // ACT
    // EXPECT
    expect(screen.getByTestId('results__list')).toBeInTheDocument();
  });
});
