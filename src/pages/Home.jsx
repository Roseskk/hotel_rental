import React, {useState} from 'react';
import UserLayout from "../layouts/UserLayout";
import Search from "../components/home/Search";
import AboutUs from "../components/home/AboutUs";

const Home = (props)  =>{
    const [position, setPosition] = useState()

    const handleSelect = (e) => {
        setPosition(e)
    }
    console.log('render')
    return(
        <UserLayout>
            <Search position={position} selectChange={handleSelect} />
            <AboutUs />
        </UserLayout>
    )
}

export default Home;