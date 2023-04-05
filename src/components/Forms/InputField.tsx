import { FORM_RULES } from './constants';
import './InputField.scss';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

type TProps = {
  type: string;
  field: string;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
};

export default function InputField({ type, field, errors, register }: TProps) {
  return (
    <div>
      <label>
        {FORM_RULES[field].fieldName}
        <input
          className="input__field"
          type={type}
          placeholder="Enter name"
          {...register(field, {
            required: true,
            pattern: FORM_RULES[field].reg,
          })}
          data-testid="input__field"
        />
      </label>
      <p className="errorText">
        &nbsp;
        {errors[field] && errors[field]!.type === 'required' && '*requied field'}
        {errors[field] && errors[field]!.type === 'pattern' && FORM_RULES[field].description}
      </p>
    </div>
  );
}
