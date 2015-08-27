"use strict";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import routeReducer from "./routeReducer";
import transactionReducer from "./transactionReducer";

const combinedReducer = combineReducers({
  authReducer,
  productReducer,
  routeReducer,
  transactionReducer
});

export default combinedReducer;
