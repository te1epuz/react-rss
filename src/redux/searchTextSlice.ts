import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ISearchText {
  value: string;
  inputValue: string;
}

const initialState: ISearchText = {
  value: '',
  inputValue: '',
};

const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    updateInput(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
  },
});

export const { updateInput } = searchTextSlice.actions;

export default searchTextSlice.reducer;
