import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react";
import {formatDate} from "../../utils/dateUtil";


export const rentalApi = createApi({
    reducerPath: 'rentalApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/api/hotels'}),

    endpoints: (build) => ({
        getHotelsByPosition: build.query({
            query: (arg) => {
                const {position,dateFrom,dateTo} = arg
                return {
                    url: `/position?position=${position}&dateFrom=${formatDate(dateFrom)}&dateTo=${formatDate(dateTo)}`,
                    method: 'GET'
                }
            }
        })
    })
})

export const {
    useGetHotelsByPositionQuery
} = rentalApi