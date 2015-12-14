"use strict";
import { applyMiddleware, createStore } from "redux";
import reducers from "../reducers/reducers";
import thunkMiddleware from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

const store = (initialState => {
  return createStoreWithMiddleware(reducers, initialState);
})();

export default store
