import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";


export const rentalApi = createApi({
    reducerPath: 'rentalApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api'}),
    endpoints: (build) => ({
      getAllRooms: build.query({
          query: () => `rooms`,
          refetchOnMountOrArgChange: true
      })
    })
})

export const {
    useGetAllRoomsQuery
} = rentalApi