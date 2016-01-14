"use strict";
import * as  ActionTypes from "../constants/action_types";

const initialState = {
  param: "",
  route: ""
};

const router = (state = initialState, action) => {
  switch (action.type) {
    case  ActionTypes.ROUTE_CHANGE:
      return {
        ...state,
        route: action.route,
        param: action.param
      };

    case  ActionTypes.LOGIN_SUCCESS:
    case  ActionTypes.LOGOUT_REQUEST:
    case  ActionTypes.OAUTH_SUCCESS:
      return {
        ...state,
        route: "MARKETPLACE"
      };

    case  ActionTypes.PRODUCT_CREATE_SUCCESS:
    case  ActionTypes.PRODUCT_DESTROY_SUCCESS:
    case  ActionTypes.PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        route: "DASHBOARD"
      };

    case  ActionTypes.LOGIN_UPDATE_SUCCESS:
    case  ActionTypes.PASSWORD_CREATE_SUCCESS:
    case  ActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        route: "LOGIN"
      };

    default:
      return state;
  }
};

export default router
