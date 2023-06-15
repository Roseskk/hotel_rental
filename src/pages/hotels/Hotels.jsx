import React from 'react';
import {useGetAllRoomsQuery} from "../../redux/api/rentalApi";

const Hotels = (props) => {
    const {data: rooms, isSuccess: roomsSuccess} = useGetAllRoomsQuery()
    console.log(rooms)
    return(
        <div>
            asdasdasd
        </div>
    )
}

export default Hotels;