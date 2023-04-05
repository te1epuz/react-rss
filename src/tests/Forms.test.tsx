import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Forms from '../pages/Forms';

describe('Forms', () => {
  it('Renders h1', () => {
    render(
      <BrowserRouter>
        <Forms />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Forms page');
  });

  it('button works', () => {
    render(
      <BrowserRouter>
        <Forms />
      </BrowserRouter>
    );
    const button = screen.getByRole('button') as HTMLButtonElement;
    fireEvent.click(button);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Forms page');
  });

  it('button works with all field filled', () => {
    render(
      <BrowserRouter>
        <Forms />
      </BrowserRouter>
    );
    const inputName = screen.getByLabelText('Name*:');
    fireEvent.change(inputName, { target: { value: 'Test' } });
    const inputGender = screen.getByLabelText('male');
    fireEvent.change(inputGender, { target: { checked: true } });
    const inputDate = screen.getByLabelText('Date of birth*:');
    fireEvent.change(inputDate, { target: { value: 'Test' } });
    const inputCountry = screen.getByLabelText('Country*:');
    fireEvent.change(inputCountry, { target: { value: 'Test' } });
    const inputCheckbox = screen.getByLabelText('Share all my personal data*');
    fireEvent.change(inputCheckbox, { target: { checked: true } });

    const button = screen.getByRole('button') as HTMLButtonElement;
    fireEvent.click(button);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Forms page');
  });
});
