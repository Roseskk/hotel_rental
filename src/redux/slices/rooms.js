import {createSlice} from "@reduxjs/toolkit";

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState:{
        rooms: [],
        room: undefined
    },
    reducers: {
        initialize: (state, action) => {
            state.rooms = action.payload.hotelData
        },
        getRoom: (state, action) => {
            state.room = action.payload.roomData
        }
    }
})

export const {initialize, getRoom} = roomsSlice.actions

export default roomsSlice.reducer