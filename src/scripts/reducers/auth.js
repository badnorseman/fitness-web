"use strict";
import * as types from "../constants/action_types";

const initialState = {
  currentUser: {}
};

const deleteUserToken = () => {
  localStorage.removeItem("userToken");
};

const setUserToken = (token) => {
  localStorage.setItem("userToken", token);
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_UPDATE_RESPONSE:
      return {
        ...state,
        currentUser: action.data
      };

    case types.AUTH0LOGIN_REQUEST:
    case types.AUTH0SIGNUP_REQUEST:
      setUserToken(action.data.token);
      return state;

    case types.AUTH0LOGIN_RESPONSE:
    case types.AUTH0SIGNUP_RESPONSE:
      return {
        ...state,
        currentUser: action.data
      };

    case types.LOGIN_RESPONSE:
    case types.OAUTH_RESPONSE:
      setUserToken(action.data.token);
      return {
        ...state,
        currentUser: action.data
      };

    case types.AUTH0LOGIN_ERROR:
    case types.AUTH0SIGNUP_ERROR:
    case types.LOGIN_ERROR:
    case types.LOGOUT_REQUEST:
    case types.OAUTH_ERROR:
    case types.SIGNUP_RESPONSE:
    case types.SIGNUP_ERROR:
      deleteUserToken();
      return {
        ...state,
        currentUser: {}
      };

    default:
      return state;
  }
};

export default auth
