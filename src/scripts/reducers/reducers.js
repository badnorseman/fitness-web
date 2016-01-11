"use strict";
import { combineReducers } from "redux";
import auth from "./auth";
import cart from "./cart";
import client from "./client";
import coach from "./coach";
import errorMessage from "./error_message";
import product from "./product";
import router from "./router";
import transaction from "./transaction";
import user from "./user";

const reducer = combineReducers({
  auth,
  cart,
  client,
  coach,
  errorMessage,
  product,
  router,
  transaction,
  user
});

export default reducer
