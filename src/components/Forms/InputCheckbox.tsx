import React from 'react';
import { FORM_RULES } from './constants';

type TProps = {
  field: string;
  isValid: boolean;
  refer: React.RefObject<HTMLInputElement>;
};

class InputCheckbox extends React.Component<TProps> {
  render() {
    const { field, isValid, refer } = this.props;
    return (
      <div>
        <label>
          <input type="checkbox" ref={refer} />
          {FORM_RULES[field].fieldName}&nbsp;
        </label>
        <span>{isValid || FORM_RULES[field].description}</span>
      </div>
    );
  }
}

export default InputCheckbox;
