import { createSlice, configureStore } from '@reduxjs/toolkit';

const searchTextSlice = createSlice({
  name: 'searchText',
  initialState: {
    value: '',
  },
  reducers: {
    updateText(state, action) {
      state.value = action.payload.value;
    },
  },
});

export const { updateText } = searchTextSlice.actions;

const store = configureStore({
  reducer: searchTextSlice.reducer,
});

store.subscribe(() => console.log(store.getState()));

store.dispatch(updateText('new text'));
