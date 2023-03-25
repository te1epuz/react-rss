import React, { RefObject } from 'react';
import { TFormData } from '../services/types';

type TFormCard = {
  id: number;
  name: string;
  gender: 'male' | 'female';
  date: string;
  country: string;
  checkbox1: boolean;
  checkbox2: boolean;
  file: string;
};

type TState = {
  formData: TFormData;
  cardsList: TFormCard[];
};

class Forms extends React.Component {
  state: TState = {
    formData: {
      name: React.createRef(),
      radioMale: React.createRef(),
      radioFemale: React.createRef(),
      date: React.createRef(),
      country: React.createRef(),
      checkbox1: React.createRef(),
      checkbox2: React.createRef(),
      file: React.createRef(),
    },
    cardsList: [],
  };

  inputName: RefObject<HTMLInputElement> = React.createRef();

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('name:', this.state.formData.name.current?.value);
    console.log('male:', this.state.formData.radioMale.current?.checked);
    console.log('female:', this.state.formData.radioFemale.current?.checked);
    console.log('date:', this.state.formData.date.current?.value);
    console.log('country:', this.state.formData.country.current?.value);
    console.log('checkbox1:', this.state.formData.checkbox1.current?.checked);
    console.log('checkbox2:', this.state.formData.checkbox2.current?.checked);
    console.log('file:', this.state.formData.file.current?.value);
    this.setState({
      cardsList: [
        ...this.state.cardsList,
        {
          id: this.state.cardsList.length + 1,
          name: this.state.formData.name.current?.value || 'no name',
          gender: this.state.formData.radioMale.current?.checked ? 'male' : 'female',
          date: this.state.formData.date.current?.value,
          country: this.state.formData.country.current?.value,
          checkbox1: this.state.formData.checkbox1.current?.checked,
          checkbox2: this.state.formData.checkbox2.current?.checked,
          file: this.state.formData.file.current?.value,
        },
      ],
    });
    event.currentTarget.reset();
  }

  render() {
    return (
      <main>
        <h1>Forms page</h1>
        <hr />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Name:&nbsp;
            <input type="text" ref={this.state.formData.name} />
          </label>
          <br />
          <label>
            <input name="gender" type="radio" ref={this.state.formData.radioMale} />
            male <br />
          </label>
          <br />
          <label>
            <input name="gender" type="radio" ref={this.state.formData.radioFemale} />
            female <br />
          </label>
          <br />
          <label>
            Date of birth:&nbsp;
            <input type="date" ref={this.state.formData.date} />
          </label>
          <br />
          <label>
            Country:&nbsp;
            <select defaultValue="none" ref={this.state.formData.country}>
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
            <input type="checkbox" ref={this.state.formData.checkbox1} />
            Share all my personal date <br />
          </label>
          <br />
          <label>
            <input type="checkbox" ref={this.state.formData.checkbox2} />
            Share my current location <br />
          </label>
          <br />
          <label>
            Upload file:&nbsp;
            <input type="file" ref={this.state.formData.file} />
          </label>
          <br />
          <button>Submit</button>
        </form>
        <div>
          <hr />
          <h2>Cards list</h2>
          <div>
            {this.state.cardsList.map((card) => (
              <div key={card.id}>
                <h3>{card.name}</h3>
                <p>{card.gender}</p>
                <p>{card.date}</p>
                <p>{card.country}</p>
                <p>{card.file}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
}

export default Forms;
