import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from '../components/Home/SearchBar';

describe('Search Bar', () => {
  it('Search Bar exists', () => {
    render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    );
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
  it('Local storage should be empty', () => {
    expect(localStorage.getItem('searchBarText')).toBe('');
  });

  it('Search Bar input works', () => {
    render(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    );
    const input = screen.getByRole('searchbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test text' } });
    expect(input.value).toBe('test text');
  });

  it('Local storage should contain "test text"', () => {
    expect(localStorage.getItem('searchBarText')).toBe('test text');
  });
});
