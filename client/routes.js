'use strict';

import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';

import App from './containers/App';
import Items from './containers/Items';

let Home = () => {
	<div></div>
};

const routes = (
    <Router history={ browserHistory }>
        <Route path='/' component={ App }>
            <IndexRoute component={ Home } />
            
            <Route path='/items' component={ Items } />
        </Route>
    </Router>
);

export default routes;