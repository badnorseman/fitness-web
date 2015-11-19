"use strict";
import {
  AUTH0_RESPONSE,
  AUTH0_ERROR,
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_RESPONSE,
  LOGOUT_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_RESPONSE,
  SIGNUP_ERROR
} from "../actions/authActions";
import {
  USER_UPDATE_REQUEST,
  USER_UPDATE_RESPONSE
} from "../actions/userActions";

const initialState = {
  currentUser: {}
};

function deleteIdToken() {
  localStorage.removeItem("idToken");
}

function deleteUserToken() {
  localStorage.removeItem("userToken");
}

function setIdToken(token) {
  localStorage.setItem("idToken", token);
}

function setUserToken(token) {
  localStorage.setItem("userToken", token);
}

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case USER_UPDATE_RESPONSE:
      return Object.assign({}, state, {
        currentUser: action.data
      });

    case AUTH0_RESPONSE:
      setIdToken(action.data);
      return Object.assign({}, state, {
        currentUser: action.data
      });

    case LOGIN_RESPONSE:
      setUserToken(action.data.token);
      return Object.assign({}, state, {
        currentUser: action.data
      });

    case LOGOUT_RESPONSE:
      deleteIdToken();
      deleteUserToken();
      return Object.assign({}, state, {
        currentUser: {}
      });

    case SIGNUP_RESPONSE:
      deleteIdToken();
      deleteUserToken();
      return Object.assign({}, state, {
        currentUser: {}
      });

    case AUTH0_ERROR:
    case LOGIN_ERROR:
    case LOGOUT_ERROR:
    case SIGNUP_ERROR:
      return Object.assign({}, state, {
        currentUser: {}
      });

    default:
      return state;
  }
}
