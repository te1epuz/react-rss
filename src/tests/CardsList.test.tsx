import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CardsList from '../components/Forms/CardsList';
import { TFormCard } from '../services/types';

const listArray: TFormCard[] = [
  {
    id: 1,
    name: 'Name',
    gender: 'male',
    date: '2022-01-01',
    country: 'Country',
    checkbox: true,
    file: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  },
];

const emptyArray: TFormCard[] = [];

describe('CardsList', () => {
  it('Renders h2', () => {
    render(
      <BrowserRouter>
        <CardsList cardsList={listArray} />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Cards list');
  });
  it('Renders empty list', () => {
    render(
      <BrowserRouter>
        <CardsList cardsList={emptyArray} />
      </BrowserRouter>
    );
    expect(screen.getByText('List is empty')).toBeInTheDocument();
  });
});
