import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ResultsCard from '../components/Home/ResultsCard';
import { BrowserRouter } from 'react-router-dom';

const result = {
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
};

describe('ResultsCard', () => {
  it('Renders searh result card', () => {
    render(
      <BrowserRouter>
        <ResultsCard result={result} />
      </BrowserRouter>
    );
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
