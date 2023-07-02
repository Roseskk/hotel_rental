import React, {useEffect} from 'react';
import UserLayout from "../layouts/UserLayout";
import SideRight from "../components/hotel/aside/SideRight";
import HotelCardContent from "../components/hotel/aside/HotelCardContent";
import {useGetRoomQuery} from "../redux/api/roomsApi";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getRoom} from "../redux/slices/rooms";

const Room = () => {
    const {hotelId,roomId} = useParams()
    const {data: roomData, isFetching: roomFetching, isLoading: roomLoading, isError: roomError} = useGetRoomQuery({hotelId: hotelId,roomId: roomId})

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRoom({roomData}))
    },[roomFetching])

    return(
        <UserLayout>
            <div className={'relative'}>
                <SideRight />
                <HotelCardContent />
            </div>
        </UserLayout>
    )
}

export default Room;