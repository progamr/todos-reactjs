import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// TODO:
// 1- Add pages to be rendered for each route. (Done)
// 2- configure routes or pages. (Done)
// 3- create login form markup.
// 4- create login form validation.
// 5- create login form API call and save data (if needed).
// 6- create register form markup.
// 7- create register form validation.
// 8- create register form API call request and save data (if needed).
