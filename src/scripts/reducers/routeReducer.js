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
  route: "",
  id: 0
};

export default function routeReducer(state = initialState, action) {
  switch (action.type) {
    case ROUTE_CHANGE:
      return Object.assign({}, state, {
        route: action.route,
        id: action.id
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
    case PRODUCT_CREATE_ERROR:
    case PRODUCT_DESTROY_ERROR:
    case PRODUCT_UPDATE_ERROR:
      return Object.assign({}, state, {
        // No change of route.
      });

    case SIGNUP_RESPONSE:
      return Object.assign({}, state, {
        route: "LOGIN"
      });

    default:
      return state;
  }
}
