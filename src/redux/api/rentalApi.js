import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";


export const rentalApi = createApi({
    reducerPath: 'rentalApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api'}),

    endpoints: (build) => ({
        getHotelsByPosition: build.query({
            query: (arg) => {
                const {position,dateFrom,dateTo} = arg
                return {
                    url: `hotels/${position}`,
                    method: 'GET'
                }
            }
        })
    })
})

export const {
    useGetHotelsByPositionQuery
} = rentalApi