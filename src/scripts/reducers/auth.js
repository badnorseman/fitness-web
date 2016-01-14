"use strict";
import * as  ActionTypes from "../constants/action_types";

const initialState = {
  currentUser: {}
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case  ActionTypes.LOGIN_SUCCESS:
    case  ActionTypes.OAUTH_SUCCESS:
    case  ActionTypes.USER_UPDATE_SUCCESS:
      return {
        ...state,
        currentUser: action.data
      };

    case  ActionTypes.LOGIN_UPDATE_SUCCESS:
    case  ActionTypes.LOGIN_ERROR:
    case  ActionTypes.LOGOUT_REQUEST:
    case  ActionTypes.OAUTH_ERROR:
    case  ActionTypes.SIGNUP_SUCCESS:
    case  ActionTypes.SIGNUP_ERROR:
      return {
        ...state,
        currentUser: {}
      };

    default:
      return state;
  }
};

export default auth
