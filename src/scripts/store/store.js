"use strict";
import { applyMiddleware, createStore } from "redux";
import reducers from "../reducers/reducers";
import thunkMiddleware from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

const configureStore = (initialState) => {
  return createStoreWithMiddleware(reducers, initialState);
};

const store = configureStore();

export default store
