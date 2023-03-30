import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import InputSelect from '../components/Forms/InputSelect';

describe('Input radio', () => {
  it('Renders radio', () => {
    render(
      <BrowserRouter>
        <InputSelect
          field="country"
          isValid={true}
          options={['Uganda', 'Eritrea', 'Venezuela']}
          value={''}
          setValue={React.useState}
        />
      </BrowserRouter>
    );
    expect(screen.getByRole('input__select')).toBeInTheDocument();
  });
  it('Renders radio with error', () => {
    render(
      <BrowserRouter>
        <InputSelect
          field="country"
          isValid={false}
          options={['Uganda', 'Eritrea', 'Venezuela']}
          value={''}
          setValue={React.useState}
        />
      </BrowserRouter>
    );
    expect(screen.getByRole('input__select')).toBeInTheDocument();
  });
});
