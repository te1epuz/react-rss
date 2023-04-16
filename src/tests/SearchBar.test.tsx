import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from '../components/Home/SearchBar';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

describe('Search Bar', () => {
  it('Search Bar exists', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchBar />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('Search Bar input works', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchBar />
        </Provider>
      </BrowserRouter>
    );
    const input = screen.getByRole('searchbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test text' } });
    fireEvent.click(screen.getByRole('button'));
    expect(input.value).toBe('test text');
  });
});
