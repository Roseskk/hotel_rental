import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";


export const rentalApi = createApi({
    reducerPath: 'rentalApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api'}),
    endpoints: (build) => ({
        getAllRooms: build.query({
              query: () => `hotels`,
              refetchOnMountOrArgChange: true
        }),
        getHotelsByPosition: build.query({
            query: (position) => `hotels/:${position}`
        })
    })
})

export const {
    useGetAllRoomsQuery,
    useGetHotelsByPositionQuery
} = rentalApi