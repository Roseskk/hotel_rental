import React, {useEffect} from 'react';
import {Form, Formik} from "formik";
import Select from "react-select";
import Input from "../ui/form/Input";
import Button from "../ui/form/Button";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const Search = ({selectChange, position, onChange, date, onSearch}) => {
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

    const options = [
        {value: 'Moscow', label: 'Москва'}
    ]

    const [startDate, endDate] = date;
    return(
        <section className={'w-full tablet:h-[500px] bg-secondary shadow-md font-primary text-default tablet:p-20'}>
            <div className={'tablet:flex tablet:flex-col gap-[20px] text-white justify-center items-center'}>
                <h1 className={'text-title'}>Поиск отелей</h1>
                    <Formik>
                        <Form
                            className={'flex bg-white w-[60%] p-[10px] rounded-[15px] gap-2 text-white'}
                            onSubmit={(e) => onSearch(e)}
                        >
                            <Select
                                placeholder={'Направление'}
                                options={options}
                                value={position}
                                styles={customStyles}
                                onChange={(target) => selectChange(target)}
                            />
                            <DatePicker
                                className={'block text-white bg-secondary outline-0  p-[15px] cursor-pointer min-w-[300px]'}
                                selectsRange={true}
                                minDate={new Date()}
                                startDate={startDate}
                                endDate={endDate}
                                onChange={(update) => {
                                    onChange(update);
                                }}
                                isClearable={true}
                                placeholderText="Выбор даты"
                            />
                            <Button value={'Найти'} />
                        </Form>
                    </Formik>
            </div>
        </section>
    )
}

export default Search;