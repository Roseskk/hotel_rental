import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createServer, Model} from "miragejs";
import {store} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

createServer({
    models: {
        hotel: Model,

    },

    routes() {
        this.namespace = "api"

        this.get("/hotels", (schema, request) => {
            return schema.hotels.all()
        })


        this.get("/hotels/:position", (schema, request) => {
            let position = request.params.position

            return schema.hotels.where({position: position.slice(1,)})
        })
    },

    seeds(server) {
        server.create("hotel", {
            hotel_id: 'msk1',
            position: 'Moscow',
            hotel_name: 'Four Seasons',
            image: '',
            price: '2000',
            coordinates: {longitude: 55.756623, latitude: 37.616403}
        })
        server.create("hotel", {
            hotel_id: 'msk2',
            position: 'Moscow',
            hotel_name: 'Metropol',
            image: '',
            price: '2000',
            coordinates: {longitude: 55.758548, latitude: 37.621712}
        })
        server.create("hotel", {
            hotel_id: 'msk3',
            position: 'Moscow',
            hotel_name: 'Президент отель',
            image: '',
            price: '2000',
            coordinates: {longitude: 55.737356, latitude: 37.613395}
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

