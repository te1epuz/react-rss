import { configureStore } from '@reduxjs/toolkit';
import searchDataSlice from './searchDataSlice';
import { RickMortyApiSlice } from './fetchRickMortyAPI';
import cardsListSlice from './cardsListSlice';

export const store = configureStore({
  reducer: {
    searchData: searchDataSlice,
    [RickMortyApiSlice.reducerPath]: RickMortyApiSlice.reducer,
    cardsList: cardsListSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(RickMortyApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
