import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";


export const roomsApi = createApi({
    reducerPath: 'roomsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api'}),
    endpoints: (build) => ({
        getRooms: build.query({
            query: (hotelId) => `rooms/${hotelId}`,
            transformResponse: (res) => res.rooms[0]
        }),
        getRoom: build.query({
            query: (arg) => {
             const {hotelId, roomId} = arg
             return {
                 url: `rooms/${hotelId}/${roomId}`,
                 method: 'GET'
             }
            }
        })
    })
})


export const {
    useGetRoomsQuery,
    useGetRoomQuery
} = roomsApi