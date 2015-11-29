"use strict";
import {
  AUTH0LOGIN_REQUEST,
  AUTH0LOGIN_RESPONSE,
  AUTH0LOGIN_ERROR,
  AUTH0SIGNUP_REQUEST,
  AUTH0SIGNUP_RESPONSE,
  AUTH0SIGNUP_ERROR,
  LOGIN_RESPONSE,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  OAUTH_RESPONSE,
  OAUTH_ERROR,
  SIGNUP_RESPONSE,
  SIGNUP_ERROR
} from "../actions/authActions";
import {
  USER_UPDATE_RESPONSE
} from "../actions/userActions";

const initialState = {
  currentUser: {}
};

function deleteUserToken() {
  localStorage.removeItem("userToken");
}

function setUserToken(token) {
  localStorage.setItem("userToken", token);
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_UPDATE_RESPONSE:
      return Object.assign({}, state, {
        currentUser: action.data
      });

    case AUTH0LOGIN_REQUEST:
    case AUTH0SIGNUP_REQUEST:
      setUserToken(action.data.token);

    case AUTH0LOGIN_RESPONSE:
    case AUTH0SIGNUP_RESPONSE:
      return Object.assign({}, state, {
        currentUser: action.data
      });

    case LOGIN_RESPONSE:
    case OAUTH_RESPONSE:
      setUserToken(action.data.token);
      return Object.assign({}, state, {
        currentUser: action.data
      });

    case AUTH0LOGIN_ERROR:
    case AUTH0SIGNUP_ERROR:
    case LOGIN_ERROR:
    case LOGOUT_REQUEST:
    case OAUTH_ERROR:
    case SIGNUP_RESPONSE:
    case SIGNUP_ERROR:
      deleteUserToken();
      return Object.assign({}, state, {
        currentUser: {}
      });

    default:
      return state;
  }
}
