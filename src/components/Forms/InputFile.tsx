import React from 'react';
import { FORM_RULES } from './constants';
import './InputFile.scss';

type TProps = {
  field: string;
  isValid: boolean;
  setValue: React.Dispatch<React.SetStateAction<File | undefined>>;
};

export default function InputFile({ field, isValid, setValue }: TProps) {
  return (
    <div role="input__file">
      <label>
        {FORM_RULES[field].fieldName}&nbsp;
        <input
          className="input__file"
          type="file"
          accept=".jpg, .jpeg, .png, .gif"
          onChange={(event) => setValue(event.target.files![0])}
        />
      </label>
      <p className="errorText">&nbsp;{isValid || FORM_RULES[field].description}</p>
    </div>
  );
}
