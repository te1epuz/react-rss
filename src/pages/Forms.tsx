import React, { useState } from 'react';
import CardsList from '../components/Forms/CardsList';
import InputField from '../components/Forms/InputField';
import { FORM_RULES } from '../components/Forms/constants';
import { TFormCard } from '../services/types';
import InputFile from '../components/Forms/InputFile';
import InputRadio from '../components/Forms/InputRadio';
import InputSelect from '../components/Forms/InputSelect';
import InputCheckbox from '../components/Forms/InputCheckbox';
import './Forms.scss';
import boggart from '../assets/boggart.gif';

export default function Forms() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');
  const [country, setCountry] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [file, setFile] = useState<File>();
  const [cardsList, setCardsList] = useState<TFormCard[]>([]);
  const [isFormValid, setIsFormValid] = useState<{ [index: string]: boolean }>({
    allFields: true,
    id: true,
    name: true,
    gender: true,
    date: true,
    country: true,
    checkbox: true,
    file: true,
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newValidation = { ...isFormValid };
    newValidation.allFields = true;
    const newCardData: TFormCard = {
      id: cardsList.length + 1,
      name,
      gender,
      date,
      country,
      checkbox,
      file: file ? URL.createObjectURL(file as Blob) : boggart,
    };

    Object.keys(newCardData).forEach((key) => {
      if (FORM_RULES[key].reg.test(newCardData[key as keyof TFormCard].toString())) {
        newValidation[key] = true;
      } else {
        newValidation[key] = false;
        newValidation.allFields = false;
      }
    });

    if (newValidation.allFields) {
      setIsFormValid(newValidation);
      setCardsList((prev) => [...prev, newCardData]);
      alert('data saved');
      event.currentTarget.reset();
    } else {
      setIsFormValid(newValidation);
    }
  }

  return (
    <main>
      <h1>Forms page</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <InputField type="text" field="name" isValid={isFormValid.name} setValue={setName} />
        <InputRadio
          field="gender"
          isValid={isFormValid.gender}
          options={['male', 'female']}
          setValue={setGender}
        />
        <InputField type="date" field="date" isValid={isFormValid.date} setValue={setDate} />
        <InputSelect
          field="country"
          isValid={isFormValid.country}
          options={['Uganda', 'Eritrea', 'Venezuela']}
          setValue={setCountry}
        />
        <InputCheckbox field="checkbox" isValid={isFormValid.checkbox} setValue={setCheckbox} />
        <InputFile field="file" isValid={isFormValid.file} setValue={setFile} />
        <p className="submit__note">*required fields</p>
        <button className="submit__button">Submit</button>
      </form>
      <CardsList cardsList={cardsList} />
    </main>
  );
}
