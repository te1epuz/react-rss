import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import InputRadio from '../components/Forms/InputRadio';

const options: { value: string; refer: React.RefObject<HTMLInputElement> }[] = [
  { value: 'male', refer: React.createRef() },
  { value: 'female', refer: React.createRef() },
];

describe('Input radio', () => {
  it('Renders radio', () => {
    render(
      <BrowserRouter>
        <InputRadio field="gender" isValid={true} options={options} />
      </BrowserRouter>
    );
    expect(screen.getByRole('input__radio')).toBeInTheDocument();
  });
  it('Renders radio with error', () => {
    render(
      <BrowserRouter>
        <InputRadio field="file" isValid={false} options={options} />
      </BrowserRouter>
    );
    expect(screen.getByRole('input__radio')).toBeInTheDocument();
  });
});
