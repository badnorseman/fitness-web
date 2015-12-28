"use strict";
import * as types from "../constants/action_types";
import {
  login as apiLogin,
  logout as apiLogout,
  oauth as apiOauth,
  signup as apiSignup
} from "../api/api";

function loginRequest(data) {
  return {
    type: types.LOGIN_REQUEST,
    data: data
  };
}

function loginResponse(response) {
  return {
    type: types.LOGIN_RESPONSE,
    data: response
  };
}

function loginError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: types.LOGIN_ERROR,
    errors: errors
  };
}

export function login(data) {
  return dispatch => {
    dispatch(loginRequest(data));
    return apiLogin(data)
    .then(response => dispatch(loginResponse(response)))
    .catch(error => dispatch(loginError(error)))
  };
}

function logoutRequest() {
  return {
    type: types.LOGOUT_REQUEST
  };
}

function logoutResponse() {
  return {
    type: types.LOGOUT_RESPONSE
  };
}

function logoutError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: types.LOGOUT_ERROR,
    errors: errors
  };
}

export function logout() {
  return dispatch => {
    dispatch(logoutRequest());
    return apiLogout()
    .then(() => dispatch(logoutResponse()))
    .catch(error => dispatch(logoutError(error)))
  };
}

function oauthRequest(provider) {
  return {
    type: types.OAUTH_REQUEST,
    provider: provider
  };
}

function oauthResponse(response) {
  return {
    type: types.OAUTH_RESPONSE,
    data: response
  };
}

function oauthError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: types.OAUTH_ERROR,
    errors: errors
  };
}

export function oauth(provider) {
  return dispatch => {
    dispatch(oauthRequest(provider));
    return apiOauth(provider)
    .then(response => dispatch(oauthResponse(response)))
    .catch(error => dispatch(oauthError(error)))
  };
}

function signupRequest(data) {
  return {
    type: types.SIGNUP_REQUEST,
    data: data
  };
}

function signupResponse(response) {
  return {
    type: types.SIGNUP_RESPONSE,
    data: response
  };
}

function signupError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: types.SIGNUP_ERROR,
    errors: errors
  };
}

export function signup(data) {
  return dispatch => {
    dispatch(signupRequest(data));
    return apiSignup(data)
    .then(response => dispatch(signupResponse(response)))
    .catch(error => dispatch(signupError(error)))
  };
}
