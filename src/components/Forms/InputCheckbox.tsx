import { FORM_RULES } from './constants';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import './InputCheckbox.scss';

type TProps = {
  field: string;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
};

export default function InputCheckbox({ field, errors, register }: TProps) {
  return (
    <div data-testid="input__checkbox">
      <label className="label__checkbox">
        <input
          className="input__checkbox"
          type="checkbox"
          {...register(field, {
            required: true,
          })}
        />
        {FORM_RULES[field].fieldName}&nbsp;
      </label>
      <p className="errorText">
        &nbsp;
        {errors[field] && errors[field]!.type === 'required' && '*requied field'}
      </p>
    </div>
  );
}
