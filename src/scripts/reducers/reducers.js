"use strict";
import { combineReducers } from "redux";
import auth from "./auth";
import cart from "./cart";
import coach from "./coach";
import customer from "./customer";
import errorMessage from "./error_message";
import product from "./product";
import router from "./router";
import transaction from "./transaction";

const reducer = combineReducers({
  auth,
  cart,
  coach,
  customer,
  errorMessage,
  product,
  router,
  transaction
});

export default reducer
