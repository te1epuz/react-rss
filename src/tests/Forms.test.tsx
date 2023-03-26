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

  it('gender female checkbox works', () => {
    render(
      <BrowserRouter>
        <Forms />
      </BrowserRouter>
    );
    const femaleCheckbox = screen.getByLabelText('female') as HTMLInputElement;
    fireEvent.change(femaleCheckbox, { target: { checked: true } });
    const button = screen.getByRole('button') as HTMLButtonElement;
    fireEvent.click(button);
    expect(femaleCheckbox.checked).toBe(true);
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
    const inputFile = screen.getByLabelText('Upload picture*:');

    fireEvent.change(inputFile, { target: { files: [''] } });

    const button = screen.getByRole('button') as HTMLButtonElement;
    fireEvent.click(button);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Forms page');
  });
});
