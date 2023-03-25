import React from 'react';
import { TFormCard, TFormData } from '../services/types';

type TState = {
  formData: TFormData;
  cardsList: TFormCard[];
  isFormValid: { [index: string]: boolean };
};

const FORM_REG_EXPS: { [index: string]: RegExp } = {
  id: /[1-999]/,
  name: /^[A-Z]{1}([a-zA-Z]){1,}$/,
  gender: /[1-999]/,
  date: /[1-999]/,
  country: /[1-999]/,
  checkbox: /[1-999]/,
  file: /[1-999]/,
};

class Forms extends React.Component {
  state: TState = {
    formData: {
      name: React.createRef(),
      radioMale: React.createRef(),
      radioFemale: React.createRef(),
      date: React.createRef(),
      country: React.createRef(),
      checkbox: React.createRef(),
      file: React.createRef(),
    },
    cardsList: [],
    isFormValid: {
      allFields: true,
      id: true,
      name: true,
      gender: true,
      date: true,
      country: true,
      checkbox: true,
      file: true,
    },
  };

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newCardData: TFormCard = {
      id: this.state.cardsList.length + 1,
      name: this.state.formData.name.current?.value || 'no name',
      gender: this.state.formData.radioMale.current?.checked ? 'male' : 'female',
      date: this.state.formData.date.current?.value || '',
      country: this.state.formData.country.current?.value || '',
      checkbox: this.state.formData.checkbox.current?.checked || false,
      file: this.state.formData.file.current?.value || '',
    };

    this.setState({
      isFormValid: {
        allFields: true,
      },
    });

    Object.keys(newCardData).forEach((key) => {
      // console.log(newCardData[key as keyof TFormCard].toString());
      // console.log(FORM_REG_EXPS[key]);
      if (FORM_REG_EXPS[key].test(newCardData[key as keyof TFormCard].toString())) {
        console.log(key, 'ok');
      } else {
        console.log(key, 'error');
      }
    });

    this.setState({
      cardsList: [...this.state.cardsList, newCardData],
    });
    // alert('data saved');
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
            <input type="text" ref={this.state.formData.name} placeholder="Enter your name" />
          </label>
          <br />
          <p>Gender</p>
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
            <input type="checkbox" ref={this.state.formData.checkbox} />
            Share all my personal date <br />
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
          {this.state.cardsList.length === 0 ? (
            <p>List is empty</p>
          ) : (
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
          )}
        </div>
      </main>
    );
  }
}

export default Forms;
