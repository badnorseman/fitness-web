"use strict";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import errorMessage from "./errorMessage";
import productReducer from "./productReducer";
import routeReducer from "./routeReducer";
import transactionReducer from "./transactionReducer";
import userReducer from "./userReducer";

const combinedReducer = combineReducers({
  authReducer,
  cartReducer,
  errorMessage,
  productReducer,
  routeReducer,
  transactionReducer,
  userReducer
});

export default combinedReducer;
