"use strict";
import * as  ACTION_TYPES from "../constants/action_types";

const initialState = {
  param: "",
  route: ""
};

const router = (state = initialState, action) => {
  switch (action.type) {
    case  ACTION_TYPES.ROUTE_CHANGE:
      return {
        ...state,
        route: action.route,
        param: action.param
      };

    case  ACTION_TYPES.LOGIN_RESPONSE:
    case  ACTION_TYPES.LOGOUT_REQUEST:
    case  ACTION_TYPES.OAUTH_RESPONSE:
      return {
        ...state,
        route: "MARKETPLACE"
      };

    case  ACTION_TYPES.PRODUCT_CREATE_RESPONSE:
    case  ACTION_TYPES.PRODUCT_DESTROY_RESPONSE:
    case  ACTION_TYPES.PRODUCT_UPDATE_RESPONSE:
      return {
        ...state,
        route: "DASHBOARD"
      };

    case  ACTION_TYPES.LOGIN_UPDATE_RESPONSE:
    case  ACTION_TYPES.PASSWORD_CREATE_RESPONSE:
    case  ACTION_TYPES.SIGNUP_RESPONSE:
      return {
        ...state,
        route: "LOGIN"
      };

    default:
      return state;
  }
};

export default router
