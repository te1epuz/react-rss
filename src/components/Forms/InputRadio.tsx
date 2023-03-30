import React from 'react';
import { FORM_RULES } from './constants';
import './InputRadio.scss';

type TProps = {
  field: string;
  isValid: boolean;
  options: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function InputRadio({ field, isValid, options, value, setValue }: TProps) {
  return (
    <div className="wrapper__radio" role="input__radio">
      <p className="title__radio">{FORM_RULES[field].fieldName}</p>
      {options.map((opt) => (
        <label className="label__radio" key={opt}>
          <input
            className="input__radio"
            name={field}
            type="radio"
            value={opt}
            checked={opt === value}
            onChange={() => setValue(opt)}
          />
          {opt}
          <br />
        </label>
      ))}
      <p className="errorText">&nbsp;{isValid || FORM_RULES[field].description}</p>
    </div>
  );
}
