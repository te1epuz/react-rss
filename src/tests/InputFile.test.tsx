import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputFile from '../components/Forms/InputFile';
import { useForm } from 'react-hook-form';

const FormFieldWithHook = () => {
  const { register } = useForm();
  return <InputFile field="file" register={register} />;
};

describe('input file', () => {
  it('Renders input', () => {
    render(<FormFieldWithHook />);
    expect(screen.getByRole('input__file')).toBeInTheDocument();
  });
});
