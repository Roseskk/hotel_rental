import React, {useEffect, useState} from 'react';
import UserLayout from "../layouts/UserLayout";
import {useGetHotelsByPositionQuery} from "../redux/api/rentalApi";
import {useParams} from "react-router-dom";
import SideBar from "../components/hotels/SideBar";
import {Clusterer, Map, Placemark} from "@pbe/react-yandex-maps";
import blueMark from '../assets/ico/hotels/blueMark.svg'

const Hotels = () => {
    const {position} = useParams()
    const {data: hotelsData, isSuccess: hotelsSuccess, isFetching: hotelsFetching} = useGetHotelsByPositionQuery(position)
    const [hotels, setHotels] = useState([])
    // console.log(hotelsData?.hotels)
    useEffect(() => {
        if (hotelsSuccess) {
            setHotels(hotelsData.hotels.map((hotel) => {
                return {
                    ...hotel,
                    geometry: {
                        type: 'Point',
                        coordinates: [hotel?.coordinates?.longitude, hotel?.coordinates?.latitude]
                    }
                }
            }))
        }
    }, [hotelsFetching])
    console.log(hotels)


    return(
        <UserLayout>
            <div className={'w-full flex h-[100vh] px-[40px]'}>
                {
                    hotelsSuccess && <SideBar hotelsData={hotelsData} />
                }
                <div className={'w-[70%] rounded-[15px]'}>
                    {
                        hotels.length !== 0 &&
                        <Map
                            modules={["clusterer.addon.balloon"]}
                            width={"100%"}
                            height={"90vh"}
                            defaultState={{
                                center: [55.751574, 37.573856],
                                zoom: 12,
                            }}
                        >
                            <Clusterer
                                options={{
                                    clusterize: true,
                                    gridSize: 32,
                                }}
                                objects={{
                                    openBalloonOnClick: true,
                                    preset: 'islands#redDotIcon',
                                }}
                                clusters={{
                                    preset: 'islands#redClusterIcons',
                                }}
                                modules={[
                                    'objectManager.addon.objectsBalloon',
                                    'objectManager.addon.objectsHint',
                                ]}
                            >
                                {hotels.map((hotel, index) => (
                                    <Placemark
                                        key={index}
                                        geometry={hotel.geometry}
                                        properties={{
                                            // hintContent: `${hotel.hotel_name}`,
                                            // iconCaption: `${hotel.hotel_name}`,
                                            iconContent:`${hotel.hotel_name}`
                                            // ca: 'asdasd',
                                        }}
                                        options={
                                        {
                                            iconLayout: 'default#image',
                                            iconImageHref: `${blueMark}`,
                                            // iconImageSize: [30, 42],
                                            // iconImageOffset: [-3, -42],
                                            iconContentLayout: '<div>Hello world</div>',
                                            // preset: 'islands#circleIcon',
                                        }}
                                    />
                                ))}
                            </Clusterer>
                        </Map>
                    }
                </div>
            </div>
        </UserLayout>
    )
}

export default Hotels;