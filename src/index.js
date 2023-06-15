import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createServer} from "miragejs";
import {store} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

createServer({
    routes() {
        this.namespace = "api"
        this.get("/rooms", () => {
            return {
                rooms: [
                    {id: 1, room: "01", price: "22000"},
                ],
            }
        })
    }
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

