import { configureStore } from '@reduxjs/toolkit';
import searchDataSlice from './searchDataSlice';
import { RickMortyApiSlice } from './fetchRickMortyAPI';

export const store = configureStore({
  reducer: {
    searchData: searchDataSlice,
    [RickMortyApiSlice.reducerPath]: RickMortyApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(RickMortyApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
