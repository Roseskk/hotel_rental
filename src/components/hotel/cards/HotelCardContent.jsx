import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useGetCommentsByIdQuery} from "../../../redux/api/commetsApi";
import {useDispatch, useSelector} from "react-redux";
import {getComments} from "../../../redux/slices/comments";

const HotelCardContent = ({coordinates, currentRoom, activeState}) => {
    const {hotelId} = useParams()
    const dispatch = useDispatch()
    const comments = useSelector((state) => state.comments.comments)

    const {data: commentsData, isFetching: commentsFetching, isSuccess: commentsSuccess} = useGetCommentsByIdQuery({hotelId: hotelId, roomId: currentRoom?.roomId})

    useEffect(() => {
        if (commentsSuccess) {
            dispatch(getComments({comments: commentsData}))
        }
    },[commentsFetching])

    // geometry: {
    //     type: 'Point',
    //         coordinates: [hotel?.coordinates?.longitude, hotel?.coordinates?.latitude]
    // }
    console.log(currentRoom)
    return(
        <div className={`${activeState ? ' translate-x-[0px]': ' -translate-x-[3000px]'} flex flex-col gap-[10px] font-primary text-default rounded-tl-[10px] rounded-bl-[10px] transition duration-500 ease-in-out absolute top-0 w-[100vw] h-[90vh] bg-secondary p-[55px]  z-10 w-[67%]`}>
            <h2 className={'text-white text-center text-title'}>Описание номера</h2>
            <p className={'text-white font-primary'}>{currentRoom?.description}</p>
        </div>
    )
}

export default HotelCardContent;