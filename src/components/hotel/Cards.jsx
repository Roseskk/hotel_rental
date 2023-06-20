import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Cards = () => {
    const rooms = useSelector((state) => state.rooms.rooms)
    console.log(rooms)
    return(
        <>
            <h1 className={'text-center text-[33px] font-primary'}>Номера</h1>
            <div className={'flex flex-wrap p-[20px] w-full justify-between font-primary text-default h-[90vh] overflow-y-scroll rounded'}>
                {
                    rooms.length !== 0 &&
                    rooms.map(room => {
                        return(
                            <div key={room.id} className={'flex relative flex-col font-primary text-default h-[400px] w-[30%] bg-red-700 rounded-[15px]'}>
                                <img src={room.image} className={'bg-blue-500 h-1/2 rounded-tr-[10px] rounded-tl-[10px] object-cover'} />
                                <span className={'absolute w-[150px] text-center top-0 right-0 p-4 rounded-bl-[10px] rounded-tr-[10px] bg-secondary text-sm text-black'}>{room.cost} ₽</span>
                                <Link to={location => `${location.pathname}/${room.roomId}`} className={'absolute w-[150px] text-center top-0 left-0 p-4 rounded-br-[10px] rounded-tl-[10px] bg-secondary text-small text-white'}>Подробнее</Link>
                                <div className={'rounded-br-[10px] flex flex-col rounded-bl-[10px] bg-white h-1/2 flex  text-center overflow-y-scroll'}>
                                    <span className={'text-title text-black tracking-wide'}>{room.type}</span>
                                    {room.description}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Cards;