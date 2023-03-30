import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import InputField from '../components/Forms/InputField';

describe('Input Field', () => {
  it('Renders input text', () => {
    render(
      <BrowserRouter>
        <InputField type="text" field="name" isValid={true} value={''} setValue={React.useState} />
      </BrowserRouter>
    );
    expect(screen.getByTestId('input__field')).toBeInTheDocument();
  });
  it('Renders input error', () => {
    render(
      <BrowserRouter>
        <InputField type="text" field="name" isValid={false} value={''} setValue={React.useState} />
      </BrowserRouter>
    );
    expect(screen.getByTestId('input__field')).toBeInTheDocument();
  });
});
