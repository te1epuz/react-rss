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
  checkbox1: RefObject<HTMLInputElement>;
  checkbox2: RefObject<HTMLInputElement>;
  file: RefObject<HTMLInputElement>;
};
