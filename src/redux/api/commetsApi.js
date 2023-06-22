import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
    endpoints: (build) => ({
        getCommentsById: build.query({
            query: (arg) =>{
                const {hotelId, roomId} = arg
                return {
                    url: `comments/${hotelId}/${roomId}`,
                    method: 'GET'
                }
            },
            transformResponse: (res) => res.comments[0]?.comments
        })
    })
})

export const {
    useGetCommentsByIdQuery
} = commentsApi