import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browerHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <Router history={browerHistory} routes={routes} />,
    document.getElementById('app')
);