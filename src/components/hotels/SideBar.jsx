import React from 'react';
import Card from "./Card";

const SideBar = ({hotelsData}) => {
    return(
        <div className={'w-[30%]'}>
            {
                hotelsData.length !== 0 &&
                hotelsData.hotels.map(hotel => <Card key={hotel.id} hotel={hotel} />)
            }
        </div>
    )
}

export default SideBar;