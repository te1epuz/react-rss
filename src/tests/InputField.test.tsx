import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import InputField from '../components/Forms/InputField';
import { useForm } from 'react-hook-form';

const FormFieldWithHook = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return <InputField type="text" field="name" errors={errors} register={register} />;
};

describe('Input Field', () => {
  it('Renders input text', () => {
    render(<FormFieldWithHook />);
    expect(screen.getByTestId('input__field')).toBeInTheDocument();
  });
  it('Renders input text with value', () => {
    render(<FormFieldWithHook />);
    const inputField = screen.getByLabelText('Name*:') as HTMLInputElement;
    fireEvent.change(inputField, { target: { value: 'aa' } });
    expect(screen.getByTestId('input__field')).toBeInTheDocument();
  });
  it('Renders input text with value', () => {
    render(<FormFieldWithHook />);
    const inputField = screen.getByLabelText('Name*:') as HTMLInputElement;
    fireEvent.change(inputField, { target: { value: 'Test' } });
    expect(screen.getByTestId('input__field')).toBeInTheDocument();
  });
});
