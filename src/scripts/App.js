"use strict";
import "babel-core/polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configure_store";
import Layout from "./containers/Layout";
import "./App.css";

const store = configureStore();

window.React = React;

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById("app")
);
