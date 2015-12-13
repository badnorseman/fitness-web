"use strict";
import {
  ROUTE_CHANGE
} from "../actions/router_actions";
import {
  AUTH0LOGIN_RESPONSE,
  AUTH0SIGNUP_RESPONSE,
  LOGIN_RESPONSE,
  LOGOUT_REQUEST,
  OAUTH_RESPONSE,
  SIGNUP_RESPONSE
} from "../actions/auth_actions";
import {
  PRODUCT_CREATE_RESPONSE,
  PRODUCT_CREATE_ERROR,
  PRODUCT_DESTROY_RESPONSE,
  PRODUCT_DESTROY_ERROR,
  PRODUCT_UPDATE_RESPONSE,
  PRODUCT_UPDATE_ERROR
} from "../actions/product_actions";

const initialState = {
  param: "",
  route: ""
};

const router = (state = initialState, action) => {
  switch (action.type) {
    case ROUTE_CHANGE:
      return {
        ...state,
        route: action.route,
        param: action.param
      };

    case AUTH0LOGIN_RESPONSE:
    case AUTH0SIGNUP_RESPONSE:
    case LOGIN_RESPONSE:
    case LOGOUT_REQUEST:
    case OAUTH_RESPONSE:
      return {
        ...state,
        route: "MARKETPLACE"
      };

    case PRODUCT_CREATE_RESPONSE:
    case PRODUCT_DESTROY_RESPONSE:
    case PRODUCT_UPDATE_RESPONSE:
      return {
        ...state,
        route: "DASHBOARD"
      };

    case SIGNUP_RESPONSE:
      return {
        ...state,
        route: "LOGIN"
      };

    default:
      return state;
  }
};

export default router;
