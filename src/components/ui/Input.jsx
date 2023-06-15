import React from 'react';

const Input = ({changeHandler, type, name, value, className, placeholder, label}) => {
    return(
        <div className={'relative'}>
            <label className={'text-gray-500 absolute text-[12px] translate-x-2 '}>{label}</label>
            <input className={className} placeholder={placeholder} name={name} type={type} onChange={changeHandler} value={value} />
        </div>
    )
}

export default Input;