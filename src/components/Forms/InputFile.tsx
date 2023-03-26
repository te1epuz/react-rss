import React from 'react';
import { FORM_RULES } from './constants';
import './InputFile.scss';

type TProps = {
  field: string;
  isValid: boolean;
  refer: React.RefObject<HTMLInputElement>;
};

class InputFile extends React.Component<TProps> {
  render() {
    const { field, isValid, refer } = this.props;
    return (
      <div>
        <label>
          {FORM_RULES[field].fieldName}&nbsp;
          <input className="input__file" type="file" accept=".jpg, .jpeg, .png, .gif" ref={refer} />
        </label>
        <p className="errorText">&nbsp;{isValid || FORM_RULES[field].description}</p>
      </div>
    );
  }
}

export default InputFile;
