import { FORM_RULES } from './constants';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import './InputSelect.scss';

type TProps = {
  field: string;
  options: string[];
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
};

export default function InputSelect({ field, options, errors, register }: TProps) {
  return (
    <div role="input__select">
      <label>
        {FORM_RULES[field].fieldName}&nbsp;
        <select
          className="input__select"
          {...register(field, {
            required: true,
          })}
          defaultValue={''}
        >
          <option value="" disabled>
            select...
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>
      <p className="errorText">
        &nbsp;
        {errors[field] && errors[field]!.type === 'required' && '*requied field'}
      </p>
    </div>
  );
}
