import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TFormCard } from '../services/types';

type TCardsList = {
  list: TFormCard[];
};

const initialState: TCardsList = {
  list: [],
};

const cardsListSlice = createSlice({
  name: 'cardsList',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<TFormCard>) {
      state.list = [...state.list, action.payload];
    },
  },
});

export const { addCard } = cardsListSlice.actions;

export default cardsListSlice.reducer;
