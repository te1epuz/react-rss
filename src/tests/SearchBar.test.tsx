import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from '../components/Home/SearchBar';

describe('Search Bar', () => {
  it('Search Bar exists', () => {
    render(
      <BrowserRouter>
        <SearchBar setSearchText={vi.fn()} />
      </BrowserRouter>
    );
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
  it('Local storage should be empty', () => {
    expect(localStorage.getItem('searchInputValue')).toBe('');
  });

  it('Search Bar input works', () => {
    render(
      <BrowserRouter>
        <SearchBar setSearchText={vi.fn()} />
      </BrowserRouter>
    );
    const input = screen.getByRole('searchbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test text' } });
    fireEvent.click(screen.getByRole('button'));
    expect(input.value).toBe('test text');
  });

  it('Local storage should contain "test text"', () => {
    expect(localStorage.getItem('searchInputValue')).toBe('test text');
  });
});
