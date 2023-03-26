import React from 'react';
import { FORM_RULES } from './constants';

type TProps = {
  type: string;
  field: string;
  isValid: boolean;
  refer: React.RefObject<HTMLInputElement>;
};

class InputField extends React.Component<TProps> {
  render() {
    const { type, field, isValid, refer } = this.props;
    return (
      <div>
        <label>
          {FORM_RULES[field].fieldName}&nbsp;
          <input type={type} ref={refer} />
        </label>
        <span>{isValid || FORM_RULES[field].description}</span>
      </div>
    );
  }
}

export default InputField;
