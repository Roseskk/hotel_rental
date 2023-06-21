import React, {useState} from 'react';
import {useSelector} from "react-redux";
import SideRight from "../aside/SideRight";
import HotelCard from "./HotelCard";
import HotelCardContent from "./HotelCardContent";

const HotelsCards = () => {
    const rooms = useSelector((state) => state.rooms.rooms)
    const [isActive, setActive] = useState(false)
    const [currentRoom, setCurrentRoom] = useState(undefined)

    const cardHandler = (room) => {
        if (isActive) {
            setActive(!isActive)
            setTimeout(() => {
                setActive(true)
                setCurrentRoom(room)
            }, 1000)
        } else {
            setActive(!isActive)
            setCurrentRoom(room)
        }
    }

    return(
        <div className={'relative'}>
            <h1 className={'text-center text-[33px] font-primary'}>Номера</h1>
            <div className={'flex flex-wrap p-[20px] w-full justify-between font-primary text-default h-[90vh] overflow-y-scroll rounded'}>
                {
                    rooms?.rooms?.length !== 0 &&
                    rooms?.rooms?.map(room => {
                        return(
                            <HotelCard room={room} cardHandler={cardHandler} />
                        )
                    })
                }
            </div>
            <SideRight activeState={isActive} currentRoom={currentRoom} />
            <HotelCardContent coordinates={rooms?.coordinates} activeState={isActive} currentRoom={currentRoom}/>
        </div>
    )
}

export default HotelsCards;