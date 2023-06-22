import {createSlice} from "@reduxjs/toolkit";

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState:{
        rooms: []
    },
    reducers: {
        initialize: (state, action) => {
            state.rooms = action.payload.hotelData
        }
    }
})

export const {initialize} = roomsSlice.actions

export default roomsSlice.reducer