import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import InputRadio from '../components/Forms/InputRadio';
import React from 'react';

describe('Input radio', () => {
  it('Renders radio', () => {
    render(
      <BrowserRouter>
        <InputRadio
          field="gender"
          isValid={true}
          options={['male', 'female']}
          value={''}
          setValue={React.useState}
        />
      </BrowserRouter>
    );
    expect(screen.getByRole('input__radio')).toBeInTheDocument();
  });
  it('Renders radio with error', () => {
    render(
      <BrowserRouter>
        <InputRadio
          field="file"
          isValid={false}
          options={['male', 'female']}
          value={''}
          setValue={React.useState}
        />
      </BrowserRouter>
    );
    const inputGender = screen.getByLabelText('male');
    fireEvent.change(inputGender, { target: { checked: true } });
    expect(screen.getByRole('input__radio')).toBeInTheDocument();
  });
  it('Renders radio without error', () => {
    render(
      <BrowserRouter>
        <InputRadio
          field="file"
          isValid={true}
          options={['male', 'female']}
          value={'male'}
          setValue={React.useState}
        />
      </BrowserRouter>
    );
    expect(screen.getByRole('input__radio')).toBeInTheDocument();
  });
});
