import {configureStore} from "@reduxjs/toolkit";
import {rentalApi} from './api/rentalApi';
import {roomsApi} from "./api/roomsApi";
import hotelsReducer from './slices/hotels';
import roomsReducer from './slices/rooms'

export const store = configureStore({
    reducer: {
        [rentalApi.reducerPath]: rentalApi.reducer,
        [roomsApi.reducerPath]: roomsApi.reducer,
        hotels: hotelsReducer,
        rooms: roomsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rentalApi.middleware, roomsApi.middleware)
});