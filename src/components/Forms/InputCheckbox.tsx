import React from 'react';
import { FORM_RULES } from './constants';
import './InputCheckbox.scss';

type TProps = {
  field: string;
  isValid: boolean;
  refer: React.RefObject<HTMLInputElement>;
};

class InputCheckbox extends React.Component<TProps> {
  render() {
    const { field, isValid, refer } = this.props;
    return (
      <div data-testid="input__checkbox">
        <label className="label__checkbox">
          <input className="input__checkbox" type="checkbox" ref={refer} />
          {FORM_RULES[field].fieldName}&nbsp;
        </label>
        <p className="errorText">&nbsp;{isValid || FORM_RULES[field].description}</p>
      </div>
    );
  }
}

export default InputCheckbox;
