import React from 'react';
import { FORM_RULES } from './constants';

type TProps = {
  field: string;
  isValid: boolean;
  options: { value: string; refer: React.RefObject<HTMLInputElement> }[];
};

class InputRadio extends React.Component<TProps> {
  render() {
    const { field, isValid, options } = this.props;
    return (
      <div>
        <p>
          {FORM_RULES[field].fieldName}&nbsp;
          <span>{isValid || FORM_RULES[field].description}</span>
        </p>
        {options.map((opt) => (
          <label key={opt.value}>
            <input name={field} type="radio" ref={opt.refer} />
            {opt.value}
            <br />
          </label>
        ))}
      </div>
    );
  }
}

export default InputRadio;
