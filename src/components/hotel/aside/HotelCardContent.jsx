import React, {useEffect} from 'react';
import {Link, useParams, useHistory} from "react-router-dom";
import {useGetCommentsByIdQuery} from "../../../redux/api/commetsApi";
import {useDispatch, useSelector} from "react-redux";
import {getComments} from "../../../redux/slices/comments";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import CommentsCarouselSection from "./CommentsCarouselSection";
import {IoReturnUpBack} from "react-icons/io5";
import Loader from "../../ui/loader/Loader";
import {BiCopy} from "react-icons/bi";
import {CopyToClipboard} from "react-copy-to-clipboard/src";

const HotelCardContent = () => {
    const {hotelId} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const data = useSelector((state) => state.rooms.room)
    const {data: commentsData, isFetching: commentsFetching, isSuccess: commentsSuccess, isLoading: commentsLoading} = useGetCommentsByIdQuery({hotelId: hotelId, roomId: data?.room?.roomId})

    useEffect(() => {
        if (commentsSuccess) {
            dispatch(getComments({comments: commentsData}))
        }
    },[commentsFetching, commentsData])

    return(
        <div className={`flex flex-col gap-[10px] font-primary text-default rounded-tl-[10px] rounded-bl-[10px] transition duration-[500ms] ease-in-out absolute top-0 w-[100vw] h-[90vh] bg-secondary p-[55px]  z-10 w-[67%]`}>
            <div className={'flex justify-between text-default'}>
                <button onClick={() => history.goBack()} className={'flex items-center bg-primary px-[15px] py-[5px] rounded-[15px] border border-black hover:bg-black'}><IoReturnUpBack className={'w-[50px]  text-secondary'} /></button>
                <CopyToClipboard text={window.location.href}>
                    <button className={'flex items-center bg-primary px-[15px] py-[5px] rounded-[15px] text-secondary border border-black'}>
                        Скопировать ссылку
                        <BiCopy className={'w-[50px]  text-secondary'} />
                    </button>
                </CopyToClipboard>
            </div>
            <h2 className={'text-white text-center text-title'}>Описание номера</h2>
            <p className={'text-white font-primary h-[200px] overflow-y-scroll border border-white p-2 rounded-[15px]'}>{data?.room?.description}</p>
            {
                commentsLoading
                ? <Loader />
                : <CommentsCarouselSection />
            }
            <h2 className={'text-white text-center text-title'}>Расположение</h2>
            {
                data?.coordinates &&
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
                            geometry={[data?.coordinates?.longitude, data?.coordinates?.latitude]}
                        />
                    </Map>
                </YMaps>
            }
        </div>
    )
}

export default HotelCardContent;