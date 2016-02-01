"use strict";
import "dialog-polyfill";
import "../../node_modules/dialog-polyfill/dialog-polyfill.css";
import "babel-core/polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Main from "./components/Main";
import "./app.css";

window.React = React;

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("app")
);
