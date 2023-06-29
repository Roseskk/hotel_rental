import React, {useState} from 'react';
import UserLayout from "../layouts/UserLayout";
import Search from "../components/home/Search";
import AboutUs from "../components/home/AboutUs";
import {useHistory} from "react-router-dom";

const Home = (props)  =>{
    const history = useHistory()
    const [position, setPosition] = useState()
    const [dateData, setDateData] = useState([null,null])

    const handleSelect = (e) => {
        setPosition(e)
    }

    const handleDateTime = (date) => {
        setDateData(date)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        if (!position) alert('hi')
        position && history.push(`/hotels/position?position=${position?.value}&dateFrom=${dateData[0]}&dateTo=${dateData[1]}`)
    }

    console.log('render')
    return(
        <UserLayout>
            <Search date={dateData} onChange={handleDateTime} position={position} selectChange={handleSelect} onSearch={handleSearch} />
            <AboutUs />
        </UserLayout>
    )
}

export default Home;