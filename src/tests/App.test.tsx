import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('Renders loading', () => {
    // ARRANGE
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // ACT
    // EXPECT
    expect(screen.getByText('loading...')).toBeInTheDocument();
  });
});
