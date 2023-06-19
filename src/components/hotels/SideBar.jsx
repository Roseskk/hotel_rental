import React from 'react';
import Card from "./Card";
import {useSelector} from "react-redux";

const SideBar = () => {
    const hotels = useSelector((state) => state.hotels.hotels)
    console.log(hotels)
    return(
        <div className={'w-[30%] h-[90vh] flex flex-col gap-[10px] overflow-y-scroll mb-[20px]'}>
            {
                hotels.length !== 0 &&
                hotels.map(hotel => <Card key={hotel.id} hotel={hotel} />)
            }
        </div>
    )
}

export default SideBar;