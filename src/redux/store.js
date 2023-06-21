import {configureStore} from "@reduxjs/toolkit";
import {rentalApi} from './api/rentalApi';
import {roomsApi} from "./api/roomsApi";
import {commentsApi} from "./api/commetsApi";
import hotelsReducer from './slices/hotels';
import roomsReducer from './slices/rooms';
import commentsReducer from './slices/comments';

export const store = configureStore({
    reducer: {
        [rentalApi.reducerPath]: rentalApi.reducer,
        [roomsApi.reducerPath]: roomsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        hotels: hotelsReducer,
        rooms: roomsReducer,
        comments: commentsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rentalApi.middleware, roomsApi.middleware, commentsApi.middleware)
});