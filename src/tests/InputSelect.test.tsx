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
          refer={React.createRef()}
          options={['Uganda', 'Eritrea', 'Venezuela']}
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
          refer={React.createRef()}
          options={['Uganda', 'Eritrea', 'Venezuela']}
        />
      </BrowserRouter>
    );
    expect(screen.getByRole('input__select')).toBeInTheDocument();
  });
});
