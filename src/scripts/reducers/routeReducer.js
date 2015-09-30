"use strict";
import {
  ROUTE_CHANGE
} from "../actions/routeActions";
import {
  LOGIN_RESPONSE,
  LOGOUT_RESPONSE,
  OAUTH_RESPONSE,
  SIGNUP_RESPONSE
} from "../actions/authActions";
import {
  PRODUCT_CREATE_RESPONSE,
  PRODUCT_CREATE_ERROR,
  PRODUCT_DESTROY_RESPONSE,
  PRODUCT_DESTROY_ERROR,
  PRODUCT_UPDATE_RESPONSE,
  PRODUCT_UPDATE_ERROR
} from "../actions/productActions";

const initialState = {
  param: "",
  route: ""
};

export default function routeReducer(state = initialState, action) {
  switch (action.type) {
    case ROUTE_CHANGE:
      return Object.assign({}, state, {
        route: action.route,
        param: action.param
      });

    case LOGIN_RESPONSE:
    case LOGOUT_RESPONSE:
    case OAUTH_RESPONSE:
      return Object.assign({}, state, {
        route: "MARKETPLACE"
      });

    case PRODUCT_CREATE_RESPONSE:
    case PRODUCT_DESTROY_RESPONSE:
    case PRODUCT_UPDATE_RESPONSE:
      return Object.assign({}, state, {
        route: "DASHBOARD"
      });

    case SIGNUP_RESPONSE:
      return Object.assign({}, state, {
        route: "LOGIN"
      });

    default:
      return state;
  }
}
