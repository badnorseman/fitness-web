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
const loginResponse = makeAction(ACTION_TYPES.LOGIN_RESPONSE, "data");
const loginError = makeAction(ACTION_TYPES.LOGIN_ERROR, "errors");

const login = (data) => {
  return dispatch => {
    dispatch(loginRequest(data));
    return apiLogin(data)
      .then(success => dispatch(loginResponse(success)))
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(loginError(errors))})
  };
}

const logoutRequest = makeAction(ACTION_TYPES.LOGOUT_REQUEST);
const logoutResponse = makeAction(ACTION_TYPES.LOGOUT_RESPONSE);
const logoutError = makeAction(ACTION_TYPES.LOGOUT_ERROR, "errors");

const logout = () => {
  return dispatch => {
    dispatch(logoutRequest());
    return apiLogout()
      .then(() => dispatch(logoutResponse()))
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(logoutError(errors))})
  };
};

const oauthRequest = makeAction(ACTION_TYPES.OAUTH_REQUEST, "provider");
const oauthResponse = makeAction(ACTION_TYPES.OAUTH_RESPONSE, "data");
const oauthError = makeAction(ACTION_TYPES.OAUTH_ERROR, "errors");

const oauth = (provider) => {
  return dispatch => {
    dispatch(oauthRequest(provider));
    return apiOauth(provider)
      .then(success => dispatch(oauthResponse(success)))
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(oauthError(errors))})
  };
};

const signupRequest = makeAction(ACTION_TYPES.SIGNUP_REQUEST, "data");
const signupResponse = makeAction(ACTION_TYPES.SIGNUP_RESPONSE, "data");
const signupError = makeAction(ACTION_TYPES.SIGNUP_ERROR, "errors");

const signup = (data) => {
  return dispatch => {
    dispatch(signupRequest(data));
    return apiSignup(data)
      .then(success => dispatch(signupResponse(success)))
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(signupError(errors))})
  };
};

const loginUpdateRequest = makeAction(ACTION_TYPES.LOGIN_UPDATE_REQUEST, "data");
const loginUpdateResponse = makeAction(ACTION_TYPES.LOGIN_UPDATE_RESPONSE, "data");
const loginUpdateError = makeAction(ACTION_TYPES.LOGIN_UPDATE_ERROR, "errors");

const updateLogin = (data) => {
  return dispatch => {
    dispatch(loginUpdateRequest(data));
    return apiUpdateLogin(data)
      .then(success => dispatch(loginUpdateResponse(success)))
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(loginUpdateError(errors))})
  };
};

const passwordCreateRequest = makeAction(ACTION_TYPES.PASSWORD_CREATE_REQUEST, "data");
const passwordCreateResponse = makeAction(ACTION_TYPES.PASSWORD_CREATE_RESPONSE, "data");
const passwordCreateError = makeAction(ACTION_TYPES.PASSWORD_CREATE_ERROR, "errors");

const createPassword = (data) => {
  return dispatch => {
    dispatch(passwordCreateRequest(data));
    return apiCreatePassword(data)
      .then(success => dispatch(passwordCreateResponse(success)))
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
