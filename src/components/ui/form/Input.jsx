import React from 'react';

const Input = ({changeHandler, type, name, value, placeholder, label}) => {
    return(
        <div className={'relative'}>
            <label htmlFor={name} className={'text-gray-500 absolute text-[12px] translate-x-2 '}>{label}</label>
            <input id={name} className={'bg-secondary p-[15px] cursor-pointer w-full'} placeholder={placeholder} name={name} type={type} onChange={(e) => changeHandler(e)} value={value} />
        </div>
    )
}

export default Input;