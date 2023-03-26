import React from 'react';
import CardsList from '../components/Forms/CardsList';
import InputField from '../components/Forms/InputField';
import { FORM_RULES } from '../components/Forms/constants';
import { TFormCard, TFormData } from '../services/types';
import InputFile from '../components/Forms/InputFile';
import InputRadio from '../components/Forms/InputRadio';

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
      file: this.state.formData.file.current?.files![0]
        ? URL.createObjectURL(this.state.formData.file.current?.files[0] as Blob)
        : '',
    };

    const newState = { ...this.state };
    newState.isFormValid.allFields = true;

    Object.keys(newCardData).forEach((key) => {
      if (FORM_RULES[key].reg.test(newCardData[key as keyof TFormCard].toString())) {
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
      this.setState({ ...newState });
    }
  }

  render() {
    return (
      <main>
        <h1>Forms page</h1>
        <hr />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <InputField
            type="text"
            field="name"
            isValid={this.state.isFormValid.name}
            refer={this.state.formData.name}
          />
          <InputRadio
            field="gender"
            isValid={this.state.isFormValid.gender}
            options={[
              { value: 'male', refer: this.state.formData.radioMale },
              { value: 'female', refer: this.state.formData.radioFemale },
            ]}
          />
          <InputField
            type="date"
            field="date"
            isValid={this.state.isFormValid.date}
            refer={this.state.formData.date}
          />
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
          <span>{this.state.isFormValid.country || FORM_RULES.country.description}</span>
          <br />
          <label>
            <input type="checkbox" ref={this.state.formData.checkbox} />
            Share all my personal data*
          </label>
          <span>{this.state.isFormValid.checkbox || FORM_RULES.checkbox.description}</span>
          <br />
          <InputFile
            field="file"
            isValid={this.state.isFormValid.file}
            refer={this.state.formData.file}
          />
          <button>Submit</button>
        </form>
        <CardsList cardsList={this.state.cardsList} />
      </main>
    );
  }
}

export default Forms;
