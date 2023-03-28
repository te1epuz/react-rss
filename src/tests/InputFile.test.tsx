import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import InputFile from '../components/Forms/InputFile';

describe('input file', () => {
  it('Renders input', () => {
    render(
      <BrowserRouter>
        <InputFile field="file" isValid={true} refer={React.createRef()} />
      </BrowserRouter>
    );
    expect(screen.getByRole('input__file')).toBeInTheDocument();
  });
  it('Renders input error', () => {
    render(
      <BrowserRouter>
        <InputFile field="file" isValid={false} refer={React.createRef()} />
      </BrowserRouter>
    );
    expect(screen.getByRole('input__file')).toBeInTheDocument();
  });
});
