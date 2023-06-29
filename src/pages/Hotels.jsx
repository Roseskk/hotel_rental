import React, {useEffect} from 'react';
import UserLayout from "../layouts/UserLayout";
import {useGetHotelsByPositionQuery} from "../redux/api/rentalApi";
import SideBar from "../components/hotels/SideBar";
import YandexMap from "../components/hotels/YandexMap";
import {useDispatch} from "react-redux";
import {transform} from "../redux/slices/hotels";
import Loader from "../components/ui/loader/Loader";
import qs from "query-string";

const Hotels = (props) => {
    const params = qs.parse(props.location.search, {ignoreQueryPrefix: true})
    // console.log(params)
    const {data: hotelsData, isSuccess: hotelsSuccess, isFetching: hotelsFetching, isLoading: hotelsLoading} = useGetHotelsByPositionQuery({position: params.position, dateFrom: params.dateFrom, dateTo: params.dateTo})
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
                hotelsLoading
                ? <Loader />
                :   <>
                        <div className={'w-full flex gap-[10px] h-[100vh] px-[40px]'}>
                            <SideBar balloonOpen={handleBalloonContainer} />
                            <YandexMap balloonOpen={handleBalloonContainer} />
                        </div>
                    </>
            }
        </UserLayout>
    )
}

export default Hotels;