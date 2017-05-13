'use strict';

import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';

import SearchBar from './containers/SearchBar';
import Items from './containers/Items';
import Home from './containers/Home';

const routes = (
    <Router history={ browserHistory }>
        <Route path='/' component={ SearchBar }>
            <IndexRoute component={ Home } />
            
            <Route path='/items' component={ Items } />
        </Route>
    </Router>
);

export default routes;