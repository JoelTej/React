import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { moviesApi } from "../redux/api/movies";
//Usar unicamente reducer o reducerSlice (estan los 2 para ejemplificar)
import moviesReducer from "../redux/reducers/movies";
import moviesReducerSlice from "../redux/slices/movies";

export const store = configureStore({
  reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer,
      moviesReducerSlice,
      moviesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});
