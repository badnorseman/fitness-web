"use strict";
import * as actionTypes from "../constants/action_types";

const initialState = {
  param: "",
  route: ""
};

const router = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GOTO:
      return {
        ...state,
        route: action.route,
        param: action.param
      };

    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.LOGOUT_REQUEST:
    case actionTypes.OAUTH_SUCCESS:
      return {
        ...state,
        route: "MARKETPLACE"
      };

    case actionTypes.PRODUCT_CREATE_SUCCESS:
    case actionTypes.PRODUCT_DESTROY_SUCCESS:
    case actionTypes.PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        route: "PRODUCTLIST"
      };

    case actionTypes.LOGIN_UPDATE_SUCCESS:
    case actionTypes.PASSWORD_CREATE_SUCCESS:
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        route: "LOGIN"
      };

    default:
      return state;
  }
};

export default router
