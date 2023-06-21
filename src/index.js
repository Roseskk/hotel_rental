import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {belongsTo, createServer, hasMany, Model} from "miragejs";
import {store} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

createServer({
    models: {
        hotel: Model.extend({
            // hotel_id: belongsTo()
        }),

        room: Model.extend({
            // hotel_id: belongsTo()
        }),

        comment: Model
    },

    routes() {
        this.namespace = "api"

        this.get("/hotels", (schema, request) => {
            return schema.hotels.all()
        })

        this.get("/hotels/:position", (schema, request) => {
            let position = request.params.position

            return schema.hotels.where({position: position})
        })

        this.get("/rooms/:roomId", (schema, request) => {
            let roomId = request.params.roomId
            console.log(roomId)

            return schema.rooms.where({ hotel_id: roomId})
        })

        this.get("/comments/:hotelId/:roomId", (schema, request) => {
            let roomId = request.params.roomId
            let hotelId = request.params.hotelId

            console.log('21',roomId, hotelId)
            return schema.comments.where({ hotel_id: hotelId, roomId: roomId})
        })
    },

    seeds(server) {
        server.create("comment", {
            hotel_id: 'msk1',
            roomId: 1,
            comments: [
                {
                    comment_id: 1,
                    content: 'Номер просто ужас'
                },
                {
                    comment_id: 2,
                    content: 'Хороший сервис'
                },
                {
                    comment_id: 3,
                    content: 'Еда говно, сотовая связь не ловит'
                },
                {
                    comment_id: 4,
                    content: 'Кровать сломалась просто класс'
                },
            ]
        })
        server.create("room", {
            hotel_id: 'msk1',
            coordinates: {longitude: 55.756623, latitude: 37.616403},
            rooms: [
                {
                    roomId: 1,
                    isWifi: false,
                    isSmoking: false,
                    isPool: false,
                    isParking: false,
                    isFitness: false,
                    isReserved: false,
                    isSafe: false,
                    isBathroom: false,
                    isTv: false,
                    image: 'https://via.placeholder.com/600/92c952',
                    cost: 3000,
                    type: 'Люкс',
                    description: 'Какой то текст',
                    dateFrom:'',
                    dateTo:'',
                    userId:''
                },
                {
                    roomId: 2,
                    isWifi: false,
                    isReserved: false,
                    isSmoking: false,
                    isPool: false,
                    isParking: false,
                    isFitness: false,
                    isSafe: false,
                    isBathroom: false,
                    isTv: false,
                    image: 'https://via.placeholder.com/600/92c952',
                    type: 'Эконом',
                    cost: 3000,
                    description: 'Какой то текст',
                    dateFrom:'',
                    dateTo:'',
                    userId:''
                },
                {
                    roomId: 3,
                    isWifi: false,
                    isReserved: false,
                    isSmoking: false,
                    isPool: false,
                    isParking: false,
                    isFitness: false,
                    isSafe: false,
                    isBathroom: false,
                    isTv: false,
                    image: 'https://via.placeholder.com/600/92c952',
                    type: 'Премиум',
                    cost: 3000,
                    description: 'Какой то текст',
                    dateFrom:'',
                    dateTo:'',
                    userId:''
                },
                {
                    roomId: 4,
                    isWifi: false,
                    isSmoking: false,
                    isPool: false,
                    isParking: false,
                    isFitness: false,
                    isReserved: false,
                    isSafe: false,
                    isBathroom: false,
                    isTv: false,
                    image: 'https://via.placeholder.com/600/92c952',
                    type: 'Премиум',
                    cost: 3000,
                    description: 'Какой то текст',
                    dateFrom:'',
                    dateTo:'',
                    userId:''
                },
                {
                    roomId: 5,
                    isWifi: false,
                    isSmoking: false,
                    isPool: false,
                    isParking: false,
                    isFitness: false,
                    isReserved: false,
                    isSafe: false,
                    isBathroom: false,
                    isTv: false,

                    image: 'https://via.placeholder.com/600/92c952',
                    type: 'Люкс',
                    cost: 3000,
                    description: 'Какой то текст',
                    dateFrom:'',
                    dateTo:'',
                    userId:''
                },
            ]
        })
        server.create("hotel", {
            hotel_id: 'msk1',
            position: 'Moscow',
            hotel_name: 'Four Seasons',
            image: 'https://via.placeholder.com/600/92c952',
            description: 'В нескольких шагах от Кремля и Красной площади, в Four Seasons Rooms Moscow, наследие истории идеально сочетается с современным дизайном. ',
            price: '90000',
            rate: 10,
            coordinates: {longitude: 55.756623, latitude: 37.616403}
        })
        server.create("hotel", {
            hotel_id: 'msk2',
            position: 'Moscow',
            hotel_name: 'Metropol',
            image: 'https://via.placeholder.com/600/92c952',
            description: 'Отель Метрополь расположен на Театральном проезде в Москве. Рядом с отелем находятся станции метро Лубянка, Театральная и Площадь Революции. ',
            price: '800',
            rate: 10,
            coordinates: {longitude: 55.758548, latitude: 37.621712}
        })
        server.create("hotel", {
            hotel_id: 'msk3',
            position: 'Moscow',
            hotel_name: 'Президент отель',
            image: 'https://via.placeholder.com/600/92c952',
            description: '«Президент-Отель» - гостиница в центре Москвы, расположенная на живописном берегу Москва-реки. ',
            price: '5000',
            rate: 10,
            coordinates: {longitude: 55.737356, latitude: 37.813395}
        })
        server.create("hotel", {
            hotel_id: 'msk5',
            position: 'Moscow',
            hotel_name: 'Мори',
            image: 'https://via.placeholder.com/600/92c952',
            description: 'Гостиница Мори',
            price: '500',
            rate: 10,
            coordinates: {longitude: 55.737390, latitude: 37.613395}
        })
        server.create("hotel", {
            hotel_id: 'msk6',
            position: 'Moscow',
            hotel_name: 'Реакомп',
            image: 'https://via.placeholder.com/600/92c952',
            description: 'Гостиница которую мы заслужили',
            price: '500',
            rate: 10,
            coordinates: {longitude: 55.737391, latitude: 37.713395}
        })
        server.create("hotel", {
            hotel_id: 'msk8',
            position: 'Moscow',
            hotel_name: 'Ивановка',
            image: 'https://via.placeholder.com/600/92c952',
            description: 'Гостиница которую мы заслужили',
            price: '500',
            coordinates: {longitude: 55.737315, latitude: 37.723395}
        })
        server.create("hotel", {
            hotel_id: 'msk9',
            position: 'Moscow',
            hotel_name: 'Гостиница',
            image: 'https://via.placeholder.com/600/92c952',
            description: 'Гостиница которую мы заслужили',
            price: '500',
            rate: 10,
            coordinates: {longitude: 55.737327, latitude: 37.513395}
        })
    },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
);

