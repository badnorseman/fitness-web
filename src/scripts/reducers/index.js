"use strict";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import errorMessage from "./errorMessage";
import productReducer from "./productReducer";
import routeReducer from "./routeReducer";
import transactionReducer from "./transactionReducer";

const combinedReducer = combineReducers({
  authReducer,
  cartReducer,
  errorMessage,
  productReducer,
  routeReducer,
  transactionReducer
});

export default combinedReducer;
