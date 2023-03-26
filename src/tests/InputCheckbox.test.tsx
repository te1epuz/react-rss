import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import InputCheckbox from '../components/Forms/InputCheckbox';
import React from 'react';

describe('Checkbox', () => {
  it('Renders checkbox', () => {
    render(
      <BrowserRouter>
        <InputCheckbox field="checkbox" isValid={true} refer={React.createRef()} />
      </BrowserRouter>
    );
    expect(screen.getByTestId('input__checkbox')).toBeInTheDocument();
  });
  it('Renders checkbox error', () => {
    render(
      <BrowserRouter>
        <InputCheckbox field="checkbox" isValid={false} refer={React.createRef()} />
      </BrowserRouter>
    );
    expect(screen.getByTestId('input__checkbox')).toBeInTheDocument();
  });
});
