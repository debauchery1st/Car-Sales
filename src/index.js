import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers"; // bring the roots
import "bulma/css/bulma.css";
import "./styles.scss";

import App from "./App";
const store = createStore(rootReducer); // create the store

const rootElement = document.getElementById("root");
// provide the store.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
