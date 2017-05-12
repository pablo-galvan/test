'use strict';

import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';

let reducer = (state={ data: [], fetching: false, fetched: false, error: null }, action) => {
    switch (action.type) {
        case 'FETCH_DATA': {
            return { ...state, fetching: true };
        }
        case 'FETCH_DATA_REJECTED': {
            return { ...state, fetching: false, error: action.payload };
        }
        case 'PUSH_DATA_ERROR': {
            return { ...state, fetching: false, error: action.payload.error };
        }
        case 'PUSH_DATA_SUCCESS': {
           return {
                ...state,
                fetching: false,
                pushed: true,
                [Object.keys(action.payload)[0]]: action.payload[Object.keys(action.payload)[0]]
            };
        }
        case 'FETCH_DATA_MODEL': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                model: action.payload
            };
        }
        case 'FETCH_DATA_FULFILLED': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                [Object.keys(action.payload)[0]]: action.payload[Object.keys(action.payload)[0]]
            };
        }
        case 'CLEAN_ERRORS': {
            return { ...state, fetching: false, error: {} };
        }
        case 'DEL_DATA': {
            return {
                ...state,
                [Object.keys(action.payload)[0]]: action.payload[Object.keys(action.payload)[0]]
            };
        }
        case 'FETCH_WIDGET_DATA': {
            return {
                ...state,
                widget: action.payload
            };
        }
    }

    return state;
};

export default combineReducers({
    reducer,
    routerReducer
});
