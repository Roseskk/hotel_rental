import React from 'react';
import NavBar from "../components/ui/navigation/NavBar";

const UserLayout = ({children}) => {
    return(
        <div className={'relative desktop:flex tablet:flex-col desktop:w-[1920px] bg-primary h-[100vh] tablet:gap-[20px] mx-auto overflow-x-hidden '}>
            <NavBar />
            {children}
        </div>
    )
}

export default UserLayout;