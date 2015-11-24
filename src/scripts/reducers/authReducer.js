"use strict";
import {
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

function setUserToken(token) {
  localStorage.setItem("userToken", token);
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_RESPONSE:
    case USER_UPDATE_RESPONSE:
      return Object.assign({}, state, {
        currentUser: action.data
      });

    case OAUTH_RESPONSE:
      setUserToken(action.data.token);
      return Object.assign({}, state, {
        currentUser: action.data
      });

    case LOGIN_ERROR:
    case LOGOUT_REQUEST:
    case OAUTH_ERROR:
    case SIGNUP_RESPONSE:
    case SIGNUP_ERROR:
      return Object.assign({}, state, {
        currentUser: {}
      });

    default:
      return state;
  }
}
