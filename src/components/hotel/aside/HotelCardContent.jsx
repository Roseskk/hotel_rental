import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useGetCommentsByIdQuery} from "../../../redux/api/commetsApi";
import {useDispatch, useSelector} from "react-redux";
import {getComments} from "../../../redux/slices/comments";
import {Carousel, ScrollingCarousel} from "@trendyol-js/react-carousel";
import Comment from "./Comment";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";

const HotelCardContent = ({coordinates, currentRoom, activeState}) => {
    const {hotelId} = useParams()
    const dispatch = useDispatch()
    const comments = useSelector((state) => state.comments.comments)

    const {data: commentsData, isFetching: commentsFetching, isSuccess: commentsSuccess} = useGetCommentsByIdQuery({hotelId: hotelId, roomId: currentRoom?.roomId})

    useEffect(() => {
        if (commentsSuccess) {
            dispatch(getComments({comments: commentsData}))
        }
    },[commentsFetching, commentsData])

    // geometry: {
    //     type: 'Point',
    //         coordinates: [hotel?.coordinates?.longitude, hotel?.coordinates?.latitude]
    // }
    console.log(coordinates)
    return(
        <div className={`${activeState ? ' translate-x-[0px]': ' -translate-x-[3000px]'} flex flex-col gap-[10px] font-primary text-default rounded-tl-[10px] rounded-bl-[10px] transition duration-500 ease-in-out absolute top-0 w-[100vw] h-[90vh] bg-secondary p-[55px]  z-10 w-[67%]`}>
            <h2 className={'text-white text-center text-title'}>Описание номера</h2>
            <p className={'text-white font-primary h-[200px] overflow-y-scroll border border-white p-2 rounded-[15px]'}>{currentRoom?.description}</p>
            <h2 className={'text-white text-center text-title'}>Коментарии</h2>
            {
                comments &&
                comments.length !== 0 &&
                <ScrollingCarousel>
                    {
                        comments.map(commentary => {
                                return (
                                    <Comment key={commentary.comment_id} comment={commentary} />
                                )
                        })
                    }
                </ScrollingCarousel>

            }
            <h2 className={'text-white text-center text-title'}>Расположение</h2>
            <YMaps>
                <Map
                    width={"100%"}
                    // height={"90vh"}
                    defaultState={{
                        center: [55.751574, 37.573856],
                        zoom: 12,
                    }}
                >
                    <Placemark
                        // onClick={(e) => balloonOpen({route: e})}
                        modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                        // key={hotel.id}
                        geometry={[coordinates?.longitude, coordinates?.latitude]}
                        // properties={{
                        //     route: hotel?.hotel_id,
                        //     iconCaption: hotel?.hotel_name,
                        //     balloonContentBody: `Отель <strong>${hotel?.description}</strong>`,
                        //     clusterCaption: `Отель <strong>${hotel?.hotel_name}</strong>`,
                        // }}
                    />
                </Map>
            </YMaps>
        </div>
    )
}

export default HotelCardContent;