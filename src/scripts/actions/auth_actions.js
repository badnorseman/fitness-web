"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import {
  login as apiLogin,
  logout as apiLogout,
  oauth as apiOauth,
  signup as apiSignup,
  updateLogin as apiUpdateLogin,
  createPassword as apiCreatePassword
} from "../api/api";
import { makeAction } from "../utils/make_action";

const loginRequest = makeAction(ACTION_TYPES.LOGIN_REQUEST, "data");
const loginSuccess = makeAction(ACTION_TYPES.LOGIN_SUCCESS, "data");
const loginError = makeAction(ACTION_TYPES.LOGIN_ERROR, "errors");

const login = (data) => {
  return dispatch => {
    dispatch(loginRequest(data));
    return apiLogin(data)
      .then(success => dispatch(loginSuccess(success)))
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(loginError(errors))})
  };
}

const logoutRequest = makeAction(ACTION_TYPES.LOGOUT_REQUEST);
const logoutSuccess = makeAction(ACTION_TYPES.LOGOUT_SUCCESS);
const logoutError = makeAction(ACTION_TYPES.LOGOUT_ERROR, "errors");

const logout = () => {
  return dispatch => {
    dispatch(logoutRequest());
    return apiLogout()
      .then(() => dispatch(logoutSuccess()))
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(logoutError(errors))})
  };
};

const oauthRequest = makeAction(ACTION_TYPES.OAUTH_REQUEST, "provider");
const oauthSuccess = makeAction(ACTION_TYPES.OAUTH_SUCCESS, "data");
const oauthError = makeAction(ACTION_TYPES.OAUTH_ERROR, "errors");

const oauth = (provider) => {
  return dispatch => {
    dispatch(oauthRequest(provider));
    return apiOauth(provider)
      .then(success => dispatch(oauthSuccess(success)))
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(oauthError(errors))})
  };
};

const signupRequest = makeAction(ACTION_TYPES.SIGNUP_REQUEST, "data");
const signupSuccess = makeAction(ACTION_TYPES.SIGNUP_SUCCESS, "data");
const signupError = makeAction(ACTION_TYPES.SIGNUP_ERROR, "errors");

const signup = (data) => {
  return dispatch => {
    dispatch(signupRequest(data));
    return apiSignup(data)
      .then(success => dispatch(signupSuccess(success)))
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(signupError(errors))})
  };
};

const loginUpdateRequest = makeAction(ACTION_TYPES.LOGIN_UPDATE_REQUEST, "data");
const loginUpdateSuccess = makeAction(ACTION_TYPES.LOGIN_UPDATE_SUCCESS, "data");
const loginUpdateError = makeAction(ACTION_TYPES.LOGIN_UPDATE_ERROR, "errors");

const updateLogin = (data) => {
  return dispatch => {
    dispatch(loginUpdateRequest(data));
    return apiUpdateLogin(data)
      .then(success => dispatch(loginUpdateSuccess(success)))
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(loginUpdateError(errors))})
  };
};

const passwordCreateRequest = makeAction(ACTION_TYPES.PASSWORD_CREATE_REQUEST, "data");
const passwordCreateSuccess = makeAction(ACTION_TYPES.PASSWORD_CREATE_SUCCESS, "data");
const passwordCreateError = makeAction(ACTION_TYPES.PASSWORD_CREATE_ERROR, "errors");

const createPassword = (data) => {
  return dispatch => {
    dispatch(passwordCreateRequest(data));
    return apiCreatePassword(data)
      .then(success => dispatch(passwordCreateSuccess(success)))
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(passwordCreateError(errors))})
  };
};

export {
  login,
  logout,
  oauth,
  signup,
  updateLogin,
  createPassword
};
