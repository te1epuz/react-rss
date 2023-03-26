import React from 'react';
import { FORM_RULES } from './constants';
import './InputField.scss';

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
          {FORM_RULES[field].fieldName}
          <input className="input__field" type={type} ref={refer} />
        </label>
        <p className="errorText">&nbsp;{isValid || FORM_RULES[field].description}</p>
      </div>
    );
  }
}

export default InputField;
