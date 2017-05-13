'use strict';

import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';

import Home from './containers/Home';
import Items from './containers/Items';
import Item from './containers/Item';

const routes = (
    <Router history={ browserHistory }>
        <Route path='/' component={ Home } />
        <Route path='/items' component={ Items } />
        <Route path='/items/:id' component={ Item } />
    </Router>
);

export default routes;