import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import './scss/main.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Auth0Provider
        domain="sergeysherstobitov.auth0.com"
        clientId="UU6gcTsi8hulFOcU3cXqx42JD30km1fU"
        redirectUri="http://localhost:3000/#/account"
    >
        <Router>
            <App />
        </Router>
    </Auth0Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();