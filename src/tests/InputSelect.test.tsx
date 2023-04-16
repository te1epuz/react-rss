import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputSelect from '../components/Forms/InputSelect';
import { useForm } from 'react-hook-form';

const FormFieldWithHook = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <InputSelect
      field="country"
      options={['Uganda', 'Eritrea', 'Venezuela']}
      errors={errors}
      register={register}
    />
  );
};

describe('Input select', () => {
  it('Renders select', () => {
    render(<FormFieldWithHook />);
    expect(screen.getByRole('input__select')).toBeInTheDocument();
  });
  it('Renders select with error', () => {
    render(<FormFieldWithHook />);
    expect(screen.getByRole('input__select')).toBeInTheDocument();
  });
});
