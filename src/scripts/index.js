"use strict";
import "babel-core/polyfill";
import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import App from "./containers";
import "./index.css";

const store = configureStore();

injectTapEventPlugin();

window.React = React;

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById("app")
);
