import React from 'react';

const NavBar = () => {
    return(
        <header className={' py-[10px] px-[40px] sticky  tablet:flex tablet:flex-row font-primary text-default tablet:justify-between'}>
            <div className={'text-primary p-2 '}>Островок и точка</div>
            <div className={'text-white bg-secondary p-2 rounded-[15px]'}>Войти/Выйти</div>
        </header>
    )
}

export default NavBar;