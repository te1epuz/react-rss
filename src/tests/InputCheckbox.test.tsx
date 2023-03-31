import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import InputCheckbox from '../components/Forms/InputCheckbox';
import { useForm } from 'react-hook-form';

const FormFieldWithHook = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return <InputCheckbox field="checkbox" errors={errors} register={register} />;
};

describe('Checkbox', () => {
  it('Renders checkbox', () => {
    render(<FormFieldWithHook />);
    expect(screen.getByTestId('input__checkbox')).toBeInTheDocument();
  });

  it('checkbox works', () => {
    render(<FormFieldWithHook />);
    const checkbox = screen.getByLabelText('Share all my personal data*') as HTMLInputElement;
    fireEvent.change(checkbox, { target: { checked: true } });
    expect(checkbox.checked).toBe(true);
  });
});
