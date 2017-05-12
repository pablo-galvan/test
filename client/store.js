'use strict';

import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";

let middlewares = [thunk];

export default createStore(reducer, applyMiddleware(...middlewares));
