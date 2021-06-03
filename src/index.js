import React from "react";
import ReactDOM from "react-dom";
import {
    applyMiddleware,
    createStore
} from 'redux'
import App from './App.tsx'
import {
    Provider
} from 'react-redux'
import reducer from './reducers/index.js'
//中间件
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

let middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware))

ReactDOM.render((
    <Provider store={store}>
        <App></App>
    </Provider>)
    , document.getElementById("app"));