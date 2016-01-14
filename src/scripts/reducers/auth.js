"use strict";
import * as  actionTypes from "../constants/action_types";

const initialState = {
  currentUser: {}
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case  actionTypes.LOGIN_SUCCESS:
    case  actionTypes.OAUTH_SUCCESS:
    case  actionTypes.USER_UPDATE_SUCCESS:
      return {
        ...state,
        currentUser: action.data
      };

    case  actionTypes.LOGIN_UPDATE_SUCCESS:
    case  actionTypes.LOGIN_ERROR:
    case  actionTypes.LOGOUT_REQUEST:
    case  actionTypes.OAUTH_ERROR:
    case  actionTypes.SIGNUP_SUCCESS:
    case  actionTypes.SIGNUP_ERROR:
      return {
        ...state,
        currentUser: {}
      };

    default:
      return state;
  }
};

export default auth
