import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";


export const rentalApi = createApi({
    reducerPath: 'rentalApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api'}),
    endpoints: (build) => ({
        getHotelsByPosition: build.query({
            query: (position) => `hotels/:${position}`
        })
    })
})

export const {
    useGetHotelsByPositionQuery
} = rentalApi