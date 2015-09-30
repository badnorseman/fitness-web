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
} from "../actions/authActions";
import {
  USER_UPDATE_REQUEST,
  USER_UPDATE_RESPONSE
} from "../actions/userActions";

const AUTH_TOKEN = "token";
const initialState = {
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
    case USER_UPDATE_RESPONSE:
      return Object.assign({}, state, {
        currentUser: action.data
      });

    case LOGIN_RESPONSE:
    case OAUTH_RESPONSE:
      saveTokenLocally(action.data.token);
      return Object.assign({}, state, {
        currentUser: action.data
      });

    case LOGOUT_RESPONSE:
    case SIGNUP_RESPONSE:
      deleteLocalToken();
      return Object.assign({}, state, {
        currentUser: {}
      });

    case LOGIN_ERROR:
    case LOGOUT_ERROR:
    case OAUTH_ERROR:
    case SIGNUP_ERROR:
      return Object.assign({}, state, {
        currentUser: {}
      });

    default:
      return state;
  }
}
