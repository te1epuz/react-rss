import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import InputRadio from '../components/Forms/InputRadio';
import { useForm } from 'react-hook-form';

const FormFieldWithHook = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <InputRadio field="gender" options={['male', 'female']} errors={errors} register={register} />
  );
};

describe('Input radio', () => {
  it('Renders radio', () => {
    render(<FormFieldWithHook />);
    expect(screen.getByRole('input__radio')).toBeInTheDocument();
  });
  it('Renders radio without error', () => {
    render(<FormFieldWithHook />);
    const inputGender = screen.getByLabelText('male');
    fireEvent.change(inputGender, { target: { checked: true } });
    expect(inputGender).toBeChecked();
  });
});
