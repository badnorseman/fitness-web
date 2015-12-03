"use strict";
import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import cartReducer from "./cart_reducer";
import errorMessageReducer from "./error_message_reducer";
import productReducer from "./product_reducer";
import routeReducer from "./route_reducer";
import transactionReducer from "./transaction_reducer";
import userReducer from "./user_reducer";

const combinedReducer = combineReducers({
  authReducer,
  cartReducer,
  errorMessageReducer,
  productReducer,
  routeReducer,
  transactionReducer,
  userReducer
});

export default combinedReducer;
