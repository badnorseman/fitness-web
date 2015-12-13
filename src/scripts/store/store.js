"use strict";
import { applyMiddleware, createStore } from "redux";
import reducer from "../reducers/reducer";
import thunkMiddleware from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

const configureStore = (initialState) => {
  return createStoreWithMiddleware(reducer, initialState);
};

const store = configureStore();

export default store;
