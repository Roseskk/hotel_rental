import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";


export const roomsApi = createApi({
    reducerPath: 'roomsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/api'}),
    endpoints: (build) => ({
        getRooms: build.query({
            query: (arg) =>{
                const {hotelId} = arg
                return {
                    url: `/rooms/${hotelId}`,
                    method: 'GET',
                }
            },
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