import React from 'react';
import { FORM_RULES } from './constants';
import './InputSelect.scss';

type TProps = {
  field: string;
  isValid: boolean;
  options: string[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function InputSelect({ field, isValid, options, setValue }: TProps) {
  return (
    <div role="input__select">
      <label>
        {FORM_RULES[field].fieldName}&nbsp;
        <select
          className="input__select"
          defaultValue=""
          onChange={(event) => setValue(event.target.value)}
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
      <p className="errorText">&nbsp;{isValid || FORM_RULES[field].description}</p>
    </div>
  );
}
