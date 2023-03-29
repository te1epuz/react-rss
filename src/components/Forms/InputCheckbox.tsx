import React from 'react';
import { FORM_RULES } from './constants';
import './InputCheckbox.scss';

type TProps = {
  field: string;
  isValid: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function InputCheckbox({ field, isValid, setValue }: TProps) {
  return (
    <div data-testid="input__checkbox">
      <label className="label__checkbox">
        <input
          className="input__checkbox"
          type="checkbox"
          onChange={(event) => setValue(event.target.checked)}
        />
        {FORM_RULES[field].fieldName}&nbsp;
      </label>
      <p className="errorText">&nbsp;{isValid || FORM_RULES[field].description}</p>
    </div>
  );
}
