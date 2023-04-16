import { FORM_RULES } from './constants';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import './InputRadio.scss';

type TProps = {
  field: string;
  options: string[];
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
};

export default function InputRadio({ field, options, errors, register }: TProps) {
  return (
    <div className="wrapper__radio" role="input__radio">
      <p className="title__radio">{FORM_RULES[field].fieldName}</p>
      {options.map((opt) => (
        <label className="label__radio" key={opt}>
          <input
            className="input__radio"
            type="radio"
            value={opt}
            {...register(field, {
              required: true,
            })}
          />
          {opt}
          <br />
        </label>
      ))}
      <p className="errorText">
        &nbsp;
        {errors[field] && errors[field]!.type === 'required' && '*requied field'}
      </p>
    </div>
  );
}
