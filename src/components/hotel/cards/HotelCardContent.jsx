import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useGetCommentsByIdQuery} from "../../../redux/api/commetsApi";

const HotelCardContent = ({coordinates, currentRoom, activeState}) => {
    console.log(currentRoom)
    const {hotelId} = useParams()

    const {data: commentsData, isFetching: commentsFetching, isSuccess: commentsSuccess} = useGetCommentsByIdQuery({hotelId: hotelId, roomId: currentRoom?.roomId})

    useEffect(() => {
    },[commentsFetching])
    console.log(hotelId)
    // geometry: {
    //     type: 'Point',
    //         coordinates: [hotel?.coordinates?.longitude, hotel?.coordinates?.latitude]
    // }
    console.log(commentsData)
    return(
        <div className={`${activeState ? ' translate-x-[0px]': ' -translate-x-[3000px]'} flex flex-col font-primary text-default rounded-tl-[10px] rounded-bl-[10px] transition duration-500 ease-in-out absolute top-0 w-[100vw] h-[90vh] bg-secondary p-[55px]  z-10 w-[67%]`}>
            <h2 className={'text-white text-center text-title'}>Описание номера</h2>
        </div>
    )
}

export default HotelCardContent;