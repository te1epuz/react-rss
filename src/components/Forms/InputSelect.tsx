import React from 'react';
import { FORM_RULES } from './constants';
import './InputSelect.scss';

type TProps = {
  field: string;
  isValid: boolean;
  refer: React.RefObject<HTMLSelectElement>;
  options: string[];
};

class InputSelect extends React.Component<TProps> {
  render() {
    const { field, isValid, refer, options } = this.props;
    return (
      <div role="input__select">
        <label>
          {FORM_RULES[field].fieldName}&nbsp;
          <select className="input__select" defaultValue="" ref={refer}>
            <option value="" disabled>
              select...
            </option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>
        <p className="errorText">&nbsp;{isValid || FORM_RULES[field].description}</p>
      </div>
    );
  }
}

export default InputSelect;
