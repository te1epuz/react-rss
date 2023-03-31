import { FORM_RULES } from './constants';
import './InputFile.scss';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type TProps = {
  field: string;
  register: UseFormRegister<FieldValues>;
};

export default function InputFile({ field, register }: TProps) {
  return (
    <div role="input__file">
      <label>
        {FORM_RULES[field].fieldName}&nbsp;
        <input
          className="input__file"
          type="file"
          accept=".jpg, .jpeg, .png, .gif"
          {...register(field)}
        />
      </label>
    </div>
  );
}
