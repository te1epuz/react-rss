import React from 'react';
import { FORM_RULES } from './constants';
import './InputRadio.scss';

type TProps = {
  field: string;
  isValid: boolean;
  options: { value: string; refer: React.RefObject<HTMLInputElement> }[];
};

class InputRadio extends React.Component<TProps> {
  render() {
    const { field, isValid, options } = this.props;
    return (
      <div className="wrapper__radio">
        <p className="title__radio">{FORM_RULES[field].fieldName}</p>
        {options.map((opt) => (
          <label className="label__radio" key={opt.value}>
            <input className="input__radio" name={field} type="radio" ref={opt.refer} />
            {opt.value}
            <br />
          </label>
        ))}
        <p className="errorText">&nbsp;{isValid || FORM_RULES[field].description}</p>
      </div>
    );
  }
}

export default InputRadio;
