import {configureStore} from "@reduxjs/toolkit";
import {rentalApi} from './api/rentalApi';
import hotelsReducer from './slices/hotels';

export const store = configureStore({
    reducer: {
        [rentalApi.reducerPath]: rentalApi.reducer,
        hotels: hotelsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rentalApi.middleware)
});