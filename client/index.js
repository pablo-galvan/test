'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

const app = document.getElementById('app');

class App extends React.Component {
    render() {
        return Routes;
    }
}

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    app
);