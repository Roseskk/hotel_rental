import React from 'react';
import Select from "react-select";
import Input from "../ui/Input";

const Search = (props) => {
    const customStyles = {
        // option: (defaultStyles, state) => ({
        //     ...defaultStyles,
        //     color: state.isSelected ? "#212529" : "#fff",
        //     backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
        // }),

        control: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: "#dccbc1",
            borderBottomLeftRadius: '10px',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '0px',
            borderTopBottomRadius: '0px',
            width: '300px',
            padding: "10px",
            border: "none",
            boxShadow: "none",
            cursor: 'pointer',

        }),
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
    };
    return(
        <section className={'w-full tablet:h-[500px] bg-secondary shadow-md font-primary text-default tablet:p-20'}>
            <div className={'tablet:flex tablet:flex-col gap-[20px] text-white justify-center items-center'}>
                <h1 className={'text-title'}>Поиск отелей</h1>
                <div className={'flex bg-white w-[60%] p-[10px] rounded-[15px] gap-2'}>
                    <Select
                    placeholder={'Направление'}
                    value={''}
                    styles={customStyles}
                    />
                    <Input className={' bg-secondary p-[15px] cursor-pointer'} type={'date'} label={'Дата Заезда'}  />
                    <Input className={' bg-secondary p-[15px] cursor-pointer '} type={'date'} label={'Дата Выезда'}  />
                    <button className={'w-full text-black bg-secondary rounded-tr-[10px] rounded-br-[10px] hover:bg-primary transition duration-700 ease-in-out'}>Найти</button>
                </div>
            </div>
        </section>
    )
}

export default Search;