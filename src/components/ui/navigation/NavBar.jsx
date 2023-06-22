import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return(
        <header className={' py-[10px] px-[40px] sticky top-0  tablet:flex tablet:flex-row font-primary text-default tablet:justify-between'}>
            <Link to={'/'} className={'text-primary p-2 '}>Островок и точка</Link>
            <div className={'text-white bg-secondary p-2 rounded-[15px]'}>Войти/Выйти</div>
        </header>
    )
}

export default NavBar;