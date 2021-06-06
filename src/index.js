import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import App from "./App.tsx";
import { Provider } from "react-redux";
import reducer from "./reducers/index";
//中间件
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index.ts";
//fontAewsome 字体库
import "@fortawesome/fontawesome-free/js/all.js";
let middleware = [thunk, createSagaMiddleware(rootSaga)];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}
const store = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("app")
);
