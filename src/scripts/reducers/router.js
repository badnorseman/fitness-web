"use strict";
import * as types from "../constants/action_types";

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

    case types.PRODUCT_CREATE_RESPONSE:
    case types.PRODUCT_DESTROY_RESPONSE:
    case types.PRODUCT_UPDATE_RESPONSE:
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
