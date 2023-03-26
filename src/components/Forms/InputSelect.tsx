import React from 'react';
import { FORM_RULES } from './constants';

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
      <div>
        <label>
          {FORM_RULES[field].fieldName}&nbsp;
          <select defaultValue="" ref={refer}>
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
        <span>{isValid || FORM_RULES[field].description}</span>
      </div>
    );
  }
}

export default InputSelect;
