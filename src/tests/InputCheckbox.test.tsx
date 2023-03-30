import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import InputCheckbox from '../components/Forms/InputCheckbox';
import React from 'react';

describe('Checkbox', () => {
  it('Renders checkbox', () => {
    render(
      <BrowserRouter>
        <InputCheckbox field="checkbox" isValid={true} value={true} setValue={React.useState} />
      </BrowserRouter>
    );
    expect(screen.getByTestId('input__checkbox')).toBeInTheDocument();
  });
  it('Renders checkbox error', () => {
    render(
      <BrowserRouter>
        <InputCheckbox field="checkbox" isValid={false} value={false} setValue={React.useState} />
      </BrowserRouter>
    );
    expect(screen.getByTestId('input__checkbox')).toBeInTheDocument();
  });

  it('checkbox works', () => {
    render(
      <BrowserRouter>
        <InputCheckbox field="checkbox" isValid={false} value={false} setValue={React.useState} />
      </BrowserRouter>
    );
    const checkbox = screen.getByLabelText('Share all my personal data*') as HTMLInputElement;
    fireEvent.change(checkbox, { target: { checked: true } });
    expect(checkbox.checked).toBe(true);
  });
});
