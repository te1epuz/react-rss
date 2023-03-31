import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TFormCard } from '../services/types';
import CardsList from '../components/Forms/CardsList';
import InputField from '../components/Forms/InputField';
import InputFile from '../components/Forms/InputFile';
import InputRadio from '../components/Forms/InputRadio';
import InputSelect from '../components/Forms/InputSelect';
import InputCheckbox from '../components/Forms/InputCheckbox';
import './Forms.scss';
import boggart from '../assets/boggart.gif';

export default function Forms() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [cardsList, setCardsList] = useState<TFormCard[]>([]);

  const onSubmit = handleSubmit((data) => {
    const newCardData: TFormCard = {
      id: cardsList.length + 1,
      name: data.name,
      gender: data.gender,
      date: data.date,
      country: data.country,
      checkbox: data.checkbox,
      file: data.file[0] ? URL.createObjectURL(data.file[0] as Blob) : boggart,
    };
    setCardsList((prev) => [...prev, newCardData]);
    reset();
  });

  return (
    <main>
      <h1>Forms page</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <InputField type="text" field="name" errors={errors} register={register} />
        <InputRadio
          field="gender"
          options={['male', 'female']}
          errors={errors}
          register={register}
        />
        <InputField type="date" field="date" errors={errors} register={register} />
        <InputSelect
          field="country"
          options={['Uganda', 'Eritrea', 'Venezuela']}
          errors={errors}
          register={register}
        />
        <InputCheckbox field="checkbox" errors={errors} register={register} />
        <InputFile field="file" register={register} />
        <p className="submit__note">*required fields</p>
        <button className="submit__button">Submit</button>
      </form>
      <CardsList cardsList={cardsList} />
    </main>
  );
}
