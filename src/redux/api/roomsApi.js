import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";


export const roomsApi = createApi({
    reducerPath: 'roomsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api'}),
    endpoints: (build) => ({
        getRooms: build.query({
            query: (roomId) => `rooms/:${roomId}`,
            transformResponse: (res) => res.rooms[0].rooms
        }),
    })
})


export const {
    useGetRoomsQuery
} = roomsApi