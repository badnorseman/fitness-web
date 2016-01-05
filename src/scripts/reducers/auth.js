"use strict";
import * as  ACTION_TYPES from "../constants/action_types";

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
    case  ACTION_TYPES.USER_UPDATE_RESPONSE:
      return {
        ...state,
        currentUser: action.data
      };

    case  ACTION_TYPES.LOGIN_RESPONSE:
    case  ACTION_TYPES.OAUTH_RESPONSE:
      setUserToken(action.data.token);
      return {
        ...state,
        currentUser: action.data
      };

    case  ACTION_TYPES.LOGIN_UPDATE_RESPONSE:
    case  ACTION_TYPES.LOGIN_ERROR:
    case  ACTION_TYPES.LOGOUT_REQUEST:
    case  ACTION_TYPES.OAUTH_ERROR:
    case  ACTION_TYPES.SIGNUP_RESPONSE:
    case  ACTION_TYPES.SIGNUP_ERROR:
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
