import { RefObject } from 'react';

export type TSearchResult = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type TSearchResults = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: TSearchResult[];
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
