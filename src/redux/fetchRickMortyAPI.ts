import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TSearchResults } from '../services/types';

export const RickMortyApiSlice = createApi({
  reducerPath: 'RickMortyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/character',
  }),
  endpoints(builder) {
    return {
      fetchRickMorty: builder.query<TSearchResults, string | void>({
        query(searchText) {
          return searchText === undefined ? '' : `/?name=${searchText}`;
        },
      }),
    };
  },
});

export const { useFetchRickMortyQuery } = RickMortyApiSlice;
