"use strict";
import "babel-core/polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Layout from "./containers/Layout";
import "./App.css";

window.React = React;

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById("app")
);
