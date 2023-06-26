import React from 'react';
import {TvIcon, WifiIcon} from "@heroicons/react/20/solid";
import {FaBath, FaCar, FaSmoking} from "react-icons/fa";
import {IoFitnessOutline} from "react-icons/io5";
import {MdPool} from "react-icons/md";
import {BsSafe2} from "react-icons/bs";
import {useSelector} from "react-redux";
import Button from "../../ui/form/Button";

const SideRight = () => {

    const data = useSelector((state) => state.rooms.room)

    return(
        <div className={`absolute font-primary p-[55px] rounded text-white flex flex-col justify-between font-primary gap-[10px] right-0 top-0 w-[33%] h-[90vh] overflow-y-scroll  bg-secondary transition duration-500 ease-in-out`}>
            <div>
                <div className={'flex justify-between'}>
                    <h2 className={'text-title'}>Номер: {data?.room?.type}</h2>
                    <h2 className={'text-title'}>Цена: {data?.room?.cost}₽</h2>
                </div>
                <div className={'w-full'}>
                    <img className={'object-cover w-full h-auto rounded-[15px]'} src={data?.room?.image} />
                </div>
                <h2 className={'text-title text-center'}>Удобства номера</h2>
                <div className={'flex flex-wrap justify-between'}>
                    <div className={'flex py-2 justify-center items-center gap-[10px] w-1/2'}>
                        <WifiIcon className={'w-[30px] h-[30px]'} />
                        <span className={'text-default w-[200px]'}>{data?.room?.isWifi ? 'Присутвует WI-FI': 'Отсутвует WI-FI'}</span>
                    </div>
                    <div className={'flex py-2 justify-center items-center gap-[10px] w-1/2'}>
                        <IoFitnessOutline className={'w-[30px] h-[30px]'} />
                        <span className={'text-default w-[200px]'}>{data?.room?.isFitness ? 'Присутвует спорт-зал': 'Отсутвует спорт-зал'}</span>
                    </div>
                    <div className={'flex py-2 justify-center items-center gap-[10px] w-1/2'}>
                        <FaBath className={'w-[30px] h-[30px]'} />
                        <span className={'text-default w-[200px]'}>{data?.room?.isBathroom ? 'Присутвует ванная': 'Отсутвует ванная'}</span>
                    </div>
                    <div className={'flex py-2 justify-center items-center gap-[10px] w-1/2'}>
                        <MdPool className={'w-[30px] h-[30px]'} />
                        <span className={'text-default w-[200px]'}>{data?.room?.isPool ? 'Присутвует бассейн': 'Отсутвует бассейн'}</span>
                    </div>
                    <div className={'flex py-2 justify-center items-center gap-[10px] w-1/2'}>
                        <FaCar className={'w-[30px] h-[30px]'} />
                        <span className={'text-default w-[200px]'}>{data?.room?.isParking ? 'Присутвует стоянка': 'Отсутвует стоянка'}</span>
                    </div>
                    <div className={'flex py-2 justify-center items-center gap-[10px] w-1/2'}>
                        <BsSafe2 className={'w-[30px] h-[30px]'} />
                        <span className={'text-default w-[200px]'}>{data?.room?.isSafe ? 'Присутвует сейф': 'Отсутвует сейф'}</span>
                    </div>
                    <div className={'flex py-2 justify-center items-center gap-[10px] w-1/2'}>
                        <FaSmoking className={'w-[30px] h-[30px]'} />
                        <span className={'text-default w-[200px]'}>{data?.room?.isSmoking ? 'Можно курить': 'Нельзя курить'}</span>
                    </div>
                    <div className={'flex py-2 justify-center items-center gap-[10px] w-1/2'}>
                        <TvIcon className={'w-[30px] h-[30px]'} />
                        <span className={'text-default w-[200px]'}>{data?.room?.isTv ? 'Присутвует телевизор': 'Отсутвует телевизор'}</span>
                    </div>
                </div>
            </div>
            <Button textSize={'text-title'} pxSize={`px-[30px]`} pySize={`py-[20px]`} value={'Забронировать'}/>
        </div>
    )
}

export default SideRight;