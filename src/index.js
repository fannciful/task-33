'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';

import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <HashRouter>
    <App/>
    </HashRouter>,
);