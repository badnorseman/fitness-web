"use strict";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import productReducer from "./productReducer";
import routeReducer from "./routeReducer";
import transactionReducer from "./transactionReducer";

const combinedReducer = combineReducers({
  authReducer,
  errorReducer,
  productReducer,
  routeReducer,
  transactionReducer
});

export default combinedReducer;
