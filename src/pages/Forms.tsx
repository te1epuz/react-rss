import React, { RefObject } from 'react';
import { TFormData } from '../services/types';

class Forms extends React.Component {
  formData: TFormData = {
    name: React.createRef(),
    radioMale: React.createRef(),
    radioFemale: React.createRef(),
    date: React.createRef(),
    country: React.createRef(),
    checkbox1: React.createRef(),
    checkbox2: React.createRef(),
    file: React.createRef(),
  };

  inputName: RefObject<HTMLInputElement> = React.createRef();

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('name:', this.formData.name.current?.value);
    console.log('male:', this.formData.radioMale.current?.checked);
    console.log('female:', this.formData.radioFemale.current?.checked);
    console.log('date:', this.formData.date.current?.value);
    console.log('country:', this.formData.country.current?.value);
    console.log('checkbox1:', this.formData.checkbox1.current?.checked);
    console.log('checkbox2:', this.formData.checkbox2.current?.checked);
    console.log('file:', this.formData.file.current?.value);
  }

  render() {
    return (
      <main>
        <h1>Forms page</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Name: <br />
            <input type="text" ref={this.formData.name} />
          </label>
          <br />
          <label>
            <input name="gender" type="radio" ref={this.formData.radioMale} />
            male <br />
          </label>
          <br />
          <label>
            <input name="gender" type="radio" ref={this.formData.radioFemale} />
            female <br />
          </label>
          <br />
          <label>
            Date of birth: <br />
            <input type="date" ref={this.formData.date} />
          </label>
          <br />
          <label>
            Country: <br />
            <select defaultValue="none" ref={this.formData.country}>
              <option value="none" disabled>
                Select country
              </option>
              <option value="Uganda">Uganda</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Venezuela">Venezuela</option>
            </select>
          </label>
          <br />
          <label>
            <input type="checkbox" ref={this.formData.checkbox1} />
            Share all my personal date <br />
          </label>
          <br />
          <label>
            <input type="checkbox" ref={this.formData.checkbox2} />
            Share my current location <br />
          </label>
          <br />
          <label>
            Upload file:
            <input type="file" ref={this.formData.file} />
          </label>
          <br />
          <button>Submit</button>
        </form>
      </main>
    );
  }
}

export default Forms;
