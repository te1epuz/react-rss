import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('Renders loading', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText('Home page')).toBeInTheDocument();
  });
});
