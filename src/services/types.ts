import { RefObject } from 'react';

export type TProduct = {
  id: number | string;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};

export type TResponse = {
  products: TProduct[];
};

export type TFormData = {
  name: RefObject<HTMLInputElement>;
  radioMale: RefObject<HTMLInputElement>;
  radioFemale: RefObject<HTMLInputElement>;
  date: RefObject<HTMLInputElement>;
  country: RefObject<HTMLSelectElement>;
  checkbox: RefObject<HTMLInputElement>;
  file: RefObject<HTMLInputElement>;
};

export type TFormCard = {
  id: number;
  name: string;
  gender: string;
  date: string;
  country: string;
  checkbox: boolean;
  file: string;
};
