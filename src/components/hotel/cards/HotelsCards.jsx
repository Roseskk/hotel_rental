import React from 'react';
import {useSelector} from "react-redux";
import HotelCard from "../aside/HotelCard";

const HotelsCards = () => {
    const rooms = useSelector((state) => state.rooms.rooms)
    return(
        <div className={'relative'}>
            <h1 className={'text-center text-[33px] font-primary'}>Номера</h1>
            {
                rooms === undefined
                    ? <div>Свободных номеров нет</div>
                    : <>
                        <div className={'flex flex-wrap p-[20px] gap-[20px] w-full justify-between font-primary text-default h-[90vh] overflow-y-scroll rounded'}>
                            {
                                rooms.length !== 0 &&
                                rooms.map(room => {
                                    return(
                                        <HotelCard key={room.id} room={room}  />
                                    )
                                })
                            }
                        </div>
                    </>
            }
        </div>
    )
}

export default HotelsCards;