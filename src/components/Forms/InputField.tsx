import React from 'react';
import { FORM_RULES } from './constants';
import './InputField.scss';

type TProps = {
  type: string;
  field: string;
  isValid: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function InputField({ type, field, isValid, value, setValue }: TProps) {
  return (
    <div>
      <label>
        {FORM_RULES[field].fieldName}
        <input
          className="input__field"
          type={type}
          placeholder="Enter name"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          data-testid="input__field"
        />
      </label>
      <p className="errorText">&nbsp;{isValid || FORM_RULES[field].description}</p>
    </div>
  );
}
