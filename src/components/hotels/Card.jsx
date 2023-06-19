import React from 'react';
import {Link} from "react-router-dom";

const Card = ({hotel}) => {
    return(
        <div className={'flex relative flex-col font-primary text-default h-[300px]'}>
            <img src={hotel.image} className={'bg-blue-500 h-1/2 rounded-tr-[10px] rounded-tl-[10px] object-cover'} />
            <span className={'absolute w-[150px] text-center top-0 right-0 p-4 rounded-bl-[10px] rounded-tr-[10px] bg-secondary text-sm text-white'}>От {hotel.price} ₽</span>
            <Link to={location => `${location.pathname}/${hotel.hotel_id}`} className={'absolute w-[150px] text-center top-0 left-0 p-4 rounded-br-[10px] rounded-tl-[10px] bg-secondary text-small text-white'}>Подробнее</Link>
            <div className={'rounded-br-[10px] flex flex-col rounded-bl-[10px] bg-secondary h-1/2 flex justify-center items-center text-center overflow-y-scroll'}>
                <span className={'text-title text-white'}>{hotel.hotel_name}</span>
                {hotel.description}
            </div>
        </div>
    )
}

export default Card;