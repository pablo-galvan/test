'use strict';

import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';

let reducer = (state={ data: [], fetching: false, fetched: false, error: null }, action) => {
    switch (action.type) {
        case 'SEARCH_SUCCESS': {
            return { ...state, items: action.payload };
        }
    }

    return state;
};

export default combineReducers({
    reducer,
    routerReducer
});
