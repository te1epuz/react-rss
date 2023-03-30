import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import InputFile from '../components/Forms/InputFile';

describe('input file', () => {
  it('Renders input', () => {
    render(
      <BrowserRouter>
        <InputFile field="file" isValid={true} setValue={React.useState} />
      </BrowserRouter>
    );
    expect(screen.getByRole('input__file')).toBeInTheDocument();
  });
  it('Renders input error', () => {
    render(
      <BrowserRouter>
        <InputFile field="file" isValid={false} setValue={React.useState} />
      </BrowserRouter>
    );
    expect(screen.getByRole('input__file')).toBeInTheDocument();
  });
});
