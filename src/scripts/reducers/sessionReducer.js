"use strict";
import {
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
} from '../actions/authActions';

const AUTH_TOKEN = "token";
const initialState = {
  isLoggedIn: false,
  currentUser: {}
};

function deleteLocalToken() {
  localStorage.removeItem(AUTH_TOKEN);
}

function saveTokenLocally(token) {
  localStorage.setItem(AUTH_TOKEN, token);
}

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    // This seems unnecessary
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
        isLoggedIn: true,
        currentUser: action.data
      });

    case LOGOUT_RESPONSE:
    case SIGNUP_RESPONSE:
      deleteLocalToken();
      return Object.assign({}, state, {
        isLoggedIn: false,
        currentUser: {}
      });

    // This seems unnecessary
    case LOGIN_ERROR:
    case LOGOUT_ERROR:
    case OAUTH_ERROR:
    case SIGNUP_ERROR:
      return Object.assign({}, state, {
        isLoggedIn: false
      });

    default:
      return state;
  }
}
