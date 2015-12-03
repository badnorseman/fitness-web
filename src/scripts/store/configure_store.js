"use strict";
import { applyMiddleware, createStore } from "redux";
import combinedReducer from "../reducers";
import thunkMiddleware from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(combinedReducer, initialState);
}
