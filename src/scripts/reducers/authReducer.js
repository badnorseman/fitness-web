"use strict";
import {
  LOGIN_RESPONSE,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  SIGNUP_RESPONSE,
  SIGNUP_ERROR
} from "../actions/authActions";
import {
  USER_UPDATE_RESPONSE
} from "../actions/userActions";

const initialState = {
  currentUser: {}
};

export default function authReducer(state = initialState, action) {
  console.log("authReducer", action, state);
  switch (action.type) {
    case LOGIN_RESPONSE:
    case USER_UPDATE_RESPONSE:
      return Object.assign({}, state, {
        currentUser: action.data
      });

    case LOGIN_ERROR:
    case LOGOUT_REQUEST:
    case SIGNUP_RESPONSE:
    case SIGNUP_ERROR:
      // deleteUserToken();
      return Object.assign({}, state, {
        currentUser: {}
      });

    default:
      return state;
  }
}
