import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { getAllProducts } from '../services/api';
import ResultsList from '../components/ResultsList';

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

  it('Renders loading', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('loading...');
  });

  it('gets list of products form server', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(getAllProducts).toHaveBeenCalled;
  });

  it('Renders list of results', () => {
    render(
      <BrowserRouter>
        <ResultsList resultsArray={resultsArray} />
      </BrowserRouter>
    );
    expect(screen.getByTestId('results__list')).toBeInTheDocument();
  });
});
