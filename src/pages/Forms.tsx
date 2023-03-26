import React from 'react';
import { FORM_VALIDATION_RULES } from '../services/constants';
import { TFormCard, TFormData } from '../services/types';

type TState = {
  formData: TFormData;
  cardsList: TFormCard[];
  isFormValid: { [index: string]: boolean };
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
      gender: this.state.formData.radioMale.current?.checked
        ? 'male'
        : this.state.formData.radioFemale.current?.checked
        ? 'female'
        : '',
      date: this.state.formData.date.current?.value || '',
      country: this.state.formData.country.current?.value || '',
      checkbox: this.state.formData.checkbox.current?.checked || false,
      // file: this.state.formData.file.current?.value || '',
      file: URL.createObjectURL(this.state.formData.file.current?.files![0] as Blob) || '',
    };

    // const file = this.state.formData.file.current?.files![0];
    // const img = URL.createObjectURL(file as Blob);
    // newCardData.file = img;

    const newState = { ...this.state };
    newState.isFormValid.allFields = true;

    Object.keys(newCardData).forEach((key) => {
      if (FORM_VALIDATION_RULES[key].reg.test(newCardData[key as keyof TFormCard].toString())) {
        newState.isFormValid[key] = true;
      } else {
        newState.isFormValid[key] = false;
        newState.isFormValid.allFields = false;
      }
    });

    if (newState.isFormValid.allFields) {
      this.setState({
        ...newState,
        cardsList: [...this.state.cardsList, newCardData],
      });
      alert('data saved');
      event.currentTarget.reset();
    } else {
      this.setState({
        ...newState,
      });
    }
  }

  render() {
    return (
      <main>
        <h1>Forms page</h1>
        <hr />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Name*:&nbsp;
            <input type="text" ref={this.state.formData.name} placeholder="Enter your name" />
          </label>
          <span>{this.state.isFormValid.name || FORM_VALIDATION_RULES.name.description}</span>
          <br />
          <p>
            Gender*:
            <span>{this.state.isFormValid.gender || FORM_VALIDATION_RULES.gender.description}</span>
          </p>
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
            Date of birth*:&nbsp;
            <input type="date" ref={this.state.formData.date} />
          </label>
          <span>{this.state.isFormValid.date || FORM_VALIDATION_RULES.date.description}</span>
          <br />
          <label>
            Country*:&nbsp;
            <select defaultValue="" ref={this.state.formData.country}>
              <option value="" disabled>
                Select country
              </option>
              <option value="Uganda">Uganda</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Venezuela">Venezuela</option>
            </select>
          </label>
          <span>{this.state.isFormValid.country || FORM_VALIDATION_RULES.country.description}</span>
          <br />
          <label>
            <input type="checkbox" ref={this.state.formData.checkbox} />
            Share all my personal data*
          </label>
          <span>
            {this.state.isFormValid.checkbox || FORM_VALIDATION_RULES.checkbox.description}
          </span>
          <br />
          <label>
            Upload file*:&nbsp;
            <input type="file" accept=".jpg, .jpeg, .png, .gif" ref={this.state.formData.file} />
          </label>
          <span>{this.state.isFormValid.file || FORM_VALIDATION_RULES.file.description}</span>
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
                  <img src={card.file} alt="" />
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
