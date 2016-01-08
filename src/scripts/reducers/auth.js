"use strict";
import * as  ACTION_TYPES from "../constants/action_types";

const initialState = {
  currentUser: {}
};

const deleteAuthToken = () => {
  localStorage.removeItem("auth_token");
};

const setAuthToken = (token) => {
  localStorage.setItem("auth_token", token);
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case  ACTION_TYPES.USER_UPDATE_SUCCESS:
      return {
        ...state,
        currentUser: action.data
      };

    case  ACTION_TYPES.LOGIN_SUCCESS:
    case  ACTION_TYPES.OAUTH_SUCCESS:
      setAuthToken(action.data.token);
      return {
        ...state,
        currentUser: action.data
      };

    case  ACTION_TYPES.LOGIN_UPDATE_SUCCESS:
    case  ACTION_TYPES.LOGIN_ERROR:
    case  ACTION_TYPES.LOGOUT_REQUEST:
    case  ACTION_TYPES.OAUTH_ERROR:
    case  ACTION_TYPES.SIGNUP_SUCCESS:
    case  ACTION_TYPES.SIGNUP_ERROR:
      deleteAuthToken();
      return {
        ...state,
        currentUser: {}
      };

    default:
      return state;
  }
};

export default auth
