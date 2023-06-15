import React from 'react';
import UserLayout from "../layouts/UserLayout";
import Search from "../components/home/Search";
import AboutUs from "../components/home/AboutUs";

const Home = (props)  =>{
    console.log('render')
    return(
        <UserLayout>
            <Search />
            <AboutUs />
        </UserLayout>
    )
}

export default Home;