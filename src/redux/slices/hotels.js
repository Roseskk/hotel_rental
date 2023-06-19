import { createSlice } from '@reduxjs/toolkit'

export const hotelsSlice = createSlice({
    name: 'hotels',
    initialState: {
        hotels: [],
    },
    reducers: {
        getHotel: (state) => {

        },
        transform:(state,action) => {

            state.hotels = action.payload.hotelsData.hotels.map((hotel) => {
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

export const { transform } = hotelsSlice.actions

export default hotelsSlice.reducer