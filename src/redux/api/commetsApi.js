import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/api'}),
    endpoints: (build) => ({
        getCommentsById: build.query({
            query: (arg) =>{
                const {roomId} = arg
                if (roomId !== undefined) {
                    return {
                        url: `/comments/${roomId}`,
                        method: 'GET'
                    }
                } else return null
            },
        })
    })
})

export const {
    useGetCommentsByIdQuery
} = commentsApi