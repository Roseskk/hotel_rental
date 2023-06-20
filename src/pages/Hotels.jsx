import React, {useEffect, useRef, useState} from 'react';
import UserLayout from "../layouts/UserLayout";
import {useGetHotelsByPositionQuery} from "../redux/api/rentalApi";
import {useParams} from "react-router-dom";
import SideBar from "../components/hotels/SideBar";
import YandexMap from "../components/hotels/YandexMap";
import {useDispatch} from "react-redux";
import {transform} from "../redux/slices/hotels";

const Hotels = () => {
    const {position} = useParams()
    const {data: hotelsData, isSuccess: hotelsSuccess, isFetching: hotelsFetching} = useGetHotelsByPositionQuery(position)
    const dispatch = useDispatch()

    useEffect(() => {
        if (hotelsSuccess) {
            dispatch(transform({hotelsData}))
        }
    }, [hotelsFetching])

    const handleBalloonContainer = ({route, id}) => {
        // route ?
        // console.log(e.originalEvent.originalEvent.originalEvent.target._data.properties._data.route)
    }

    return(
        <UserLayout>
            {
                <div className={'w-full flex gap-[10px] h-[100vh] px-[40px]'}>
                    <SideBar balloonOpen={handleBalloonContainer} />
                    <YandexMap balloonOpen={handleBalloonContainer} />
                </div>
            }
        </UserLayout>
    )
}

export default Hotels;