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
    // const [hotels, setHotels] = useState([])
    const dispatch = useDispatch()
    // console.log(hotelsData?.hotels)
    // const ymaps = useYMaps(['Map'])
    // const mapRef = useRef(null);

    useEffect(() => {
        if (hotelsSuccess) {
            dispatch(transform({hotelsData}))
        }
    }, [hotelsFetching])

    return(
        <UserLayout>
            {
                <div className={'w-full flex gap-[10px] h-[100vh] px-[40px]'}>
                    <SideBar />
                    <YandexMap />
                </div>
            }
        </UserLayout>
    )
}

export default Hotels;