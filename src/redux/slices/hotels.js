import { createSlice } from '@reduxjs/toolkit'

export const hotelsSlice = createSlice({
    name: 'hotels',
    initialState: {
        hotels: [],
        rooms: []
    },
    reducers: {
        setRooms: (state, action) => {
            state.rooms = action.payload.hotelData
        },
        transform:(state,action) => {
            console.log(action.payload.hotelsData)
            state.hotels = action.payload.hotelsData.map((hotel) => {
                return {
                    ...hotel,
                    geometry: {
                        type: 'Point',
                        coordinates: [hotel?.coordinates?.longitude, hotel?.coordinates?.latitude]
                    }
                }
            })
        }
    },
})

export const { transform, setRooms } = hotelsSlice.actions

export default hotelsSlice.reducer