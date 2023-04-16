import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TSearchData = {
  searchText: string;
  inputValue: string;
};

const initialState: TSearchData = {
  searchText: '',
  inputValue: '',
};

const searchDataSlice = createSlice({
  name: 'searchData',
  initialState,
  reducers: {
    updateInput(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
    updateText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
  },
});

export const { updateInput, updateText } = searchDataSlice.actions;

export default searchDataSlice.reducer;
