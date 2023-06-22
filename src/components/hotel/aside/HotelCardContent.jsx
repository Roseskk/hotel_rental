import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useGetCommentsByIdQuery} from "../../../redux/api/commetsApi";
import {useDispatch} from "react-redux";
import {getComments} from "../../../redux/slices/comments";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import CommentsCarouselSection from "./CommentsCarouselSection";
import {IoReturnUpBack} from "react-icons/io5";

const HotelCardContent = ({coordinates, currentRoom, activeState, onBackClick}) => {
    const {hotelId} = useParams()
    const dispatch = useDispatch()

    const {data: commentsData, isFetching: commentsFetching, isSuccess: commentsSuccess} = useGetCommentsByIdQuery({hotelId: hotelId, roomId: currentRoom?.roomId})

    useEffect(() => {
        if (commentsSuccess) {
            dispatch(getComments({comments: commentsData}))
        }
    },[commentsFetching, commentsData])

    return(
        <div className={`${activeState ? ' translate-x-[0px]': ' -translate-x-[3000px]'} flex flex-col gap-[10px] font-primary text-default rounded-tl-[10px] rounded-bl-[10px] transition duration-500 ease-in-out absolute top-0 w-[100vw] h-[90vh] bg-secondary p-[55px]  z-10 w-[67%]`}>
            <div className={'flex justify-between text-default'}>
                <button onClick={() => onBackClick()} className={'flex items-center bg-primary px-[15px] py-[5px] rounded-[15px] border border-black'}><IoReturnUpBack className={'w-[50px]  text-secondary'} /></button>
                <button className={'flex items-center bg-primary px-[15px] py-[5px] rounded-[15px] text-secondary border border-black'}>Забронировать</button>
            </div>
            <h2 className={'text-white text-center text-title'}>Описание номера</h2>
            <p className={'text-white font-primary h-[200px] overflow-y-scroll border border-white p-2 rounded-[15px]'}>{currentRoom?.description}</p>
            <h2 className={'text-white text-center text-title'}>Коментарии</h2>
            <CommentsCarouselSection />
            <h2 className={'text-white text-center text-title'}>Расположение</h2>
            {
                coordinates &&
                <YMaps>
                    <Map
                        width={"100%"}
                        defaultState={{
                            center: [55.751574, 37.573856],
                            zoom: 12,
                        }}
                    >
                        <Placemark
                            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                            geometry={[coordinates?.longitude, coordinates?.latitude]}
                        />
                    </Map>
                </YMaps>
            }
        </div>
    )
}

export default HotelCardContent;