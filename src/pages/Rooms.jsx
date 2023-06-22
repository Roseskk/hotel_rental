import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import {useDispatch} from "react-redux";
import HotelsCards from "../components/hotel/cards/HotelsCards";
import {useGetRoomsQuery} from "../redux/api/roomsApi";
import {initialize} from "../redux/slices/rooms";
import Loader from "../components/ui/loader/Loader";

const Rooms = () => {
    const {hotelId} = useParams()
    const {data: hotelData, isSuccess: roomsSuccess, isFetching: roomsFetching, isLoading: roomsLoading} = useGetRoomsQuery(hotelId)
    const dispatch = useDispatch()

    useEffect(() => {
        if (roomsSuccess) dispatch(initialize({hotelData}))
    },[roomsFetching])

    return(
        <UserLayout>
            {
                roomsLoading
                ? <Loader />
                : <HotelsCards />
            }
        </UserLayout>
    )
}

export default Rooms;