import React from 'react';
import { FORM_RULES } from './constants';

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
          <input type="file" accept=".jpg, .jpeg, .png, .gif" ref={refer} />
        </label>
        <span>{isValid || FORM_RULES[field].description}</span>
      </div>
    );
  }
}

export default InputFile;
