import React from 'react';
import {Clusterer, Map, Placemark} from "@pbe/react-yandex-maps";
import {useSelector} from "react-redux";

const YandexMap = () => {
    const hotels = useSelector((state) => state.hotels.hotels)
    return(
        <div className={'w-[70%] h-[90vh] overflow-y-hidden rounded-[15px]'}>
            {
                hotels &&
                <Map
                    modules={["templateLayoutFactory","clusterer.addon.balloon"]}
                    width={"100%"}
                    height={"90vh"}
                    defaultState={{
                        center: [55.751574, 37.573856],
                        zoom: 12,
                    }}
                >
                    <Clusterer
                        options={{
                            clusterize: true,
                            gridSize: 32,
                            groupByCoordinates: false,
                        }}
                        objects={{
                            openBalloonOnClick: true,
                            preset: 'islands#redDotIcon',
                        }}
                        clusters={{
                            preset: 'islands#redClusterIcons',
                        }}
                        modules={[
                            'objectManager.addon.objectsBalloon',
                            'objectManager.addon.objectsHint',
                        ]}
                        filter={object => object.id % 2 === 0}
                    >
                        {hotels.map((hotel, index) => (
                            <Placemark
                                modules={[
                                    "geoObject.addon.hint"
                                ]}
                                key={index}
                                geometry={hotel.geometry}
                                properties={{
                                    iconCaption: hotel.hotel_name,
                                    balloonContentBody: `Отель <strong>${hotel.description}</strong>`,
                                    clusterCaption: `Отель <strong>${hotel.hotel_name}</strong>`
                                }}

                                // options={{
                                //     iconLayout: ymaps.templateLayoutFactory?.createClass(`<div class="rounded-[50%] shadow-xl font-primary w-[40px] h-[40px] text-[10px] bg-blue-700 shadow-2xl flex justify-center items-center text-white overflow-hidden ">${hotel.id}</div>`),
                                // }}
                            />
                        ))}
                    </Clusterer>
                </Map>
            }
        </div>
    )
}

export default YandexMap;