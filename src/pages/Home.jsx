import React, {useState} from 'react';
import UserLayout from "../layouts/UserLayout";
import Search from "../components/home/Search";
import AboutUs from "../components/home/AboutUs";
import {useHistory} from "react-router-dom";

const Home = (props)  =>{
    const history = useHistory()
    const [position, setPosition] = useState()
    const [dateData, setDateData] = useState({
        dateFrom: '',
        dateTo: ''
    })

    const handleSelect = (e) => {
        setPosition(e)
    }

    const handleDateTime = (e) => {
        setDateData({
            [e.target.name]: e.target.value
        })
    }

    const handleSearch = (e) => {
        e.preventDefault()
        position && history.push(`/hotels/${position?.value}`)
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