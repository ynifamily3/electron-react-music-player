import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from "redux";
import rootReducer from "./store/modules";
import { Provider } from "react-redux";

// import { composeWithDevTools } from "electron-redux-devtools";
// const composeWithDevTools = require("electron-redux-devtools");

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

// entry point
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
