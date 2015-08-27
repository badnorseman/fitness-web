"use strict";
import {
  AUTH_ERROR_RESET,
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_RESPONSE,
  LOGOUT_ERROR,
  OAUTH_REQUEST,
  OAUTH_RESPONSE,
  OAUTH_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_RESPONSE,
  SIGNUP_ERROR
} from "../actions/authActions";

const AUTH_TOKEN = "token";
const initialState = {
  errors: [],
  isLoggedIn: false,
  user: {}
};

function deleteLocalToken() {
  localStorage.removeItem(AUTH_TOKEN);
}

function saveTokenLocally(token) {
  localStorage.setItem(AUTH_TOKEN, token);
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_ERROR_RESET:
      return Object.assign({}, state, {
        errors: []
      });

    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
    case OAUTH_REQUEST:
    case SIGNUP_REQUEST:
      return Object.assign({}, state, {
        isLoggedIn: false
      });

    case LOGIN_RESPONSE:
    case OAUTH_RESPONSE:
      saveTokenLocally(action.data.token);
      return Object.assign({}, state, {
        errors: [],
        isLoggedIn: true,
        user: action.data
      });

    case LOGOUT_RESPONSE:
    case SIGNUP_RESPONSE:
      deleteLocalToken();
      return Object.assign({}, state, {
        errors: [],
        isLoggedIn: false,
        user: {}
      });

    case LOGIN_ERROR:
    case LOGOUT_ERROR:
    case OAUTH_ERROR:
    case SIGNUP_ERROR:
      return Object.assign({}, state, {
        errors: action.errors,
        isLoggedIn: false
      });

    default:
      return state;
  }
}
