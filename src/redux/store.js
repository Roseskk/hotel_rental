import {configureStore} from "@reduxjs/toolkit";
import {rentalApi} from './api/rentalApi';

export const store = configureStore({
    reducer: {
        [rentalApi.reducerPath]: rentalApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rentalApi.middleware)
});