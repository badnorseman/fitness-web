"use strict";
import * as types from "../constants/action_types";
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
    case types.ROUTE_CHANGE:
      return {
        ...state,
        route: action.route,
        param: action.param
      };

    case types.AUTH0LOGIN_RESPONSE:
    case types.AUTH0SIGNUP_RESPONSE:
    case types.LOGIN_RESPONSE:
    case types.LOGOUT_REQUEST:
    case types.OAUTH_RESPONSE:
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

    case types.SIGNUP_RESPONSE:
      return {
        ...state,
        route: "LOGIN"
      };

    default:
      return state;
  }
};

export default router
