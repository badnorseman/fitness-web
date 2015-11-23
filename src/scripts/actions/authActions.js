"use strict";
import {
  login as apiLogin,
  signup as apiSignup
} from "../api/api";

function deleteUserToken() {
  localStorage.removeItem("userToken");
}

function setUserToken(token) {
  localStorage.setItem("userToken", token);
}

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_RESPONSE = "LOGIN_RESPONSE";
export const LOGIN_ERROR = "LOGIN_ERROR";

function loginRequest(data) {
  return {
    type: LOGIN_REQUEST,
    data: data
  };
}

function loginResponse(response) {
  return {
    type: LOGIN_RESPONSE,
    data: response
  };
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    errors: error
  };
}

export function login(error, profile, token) {
  return dispatch => {
    if (token) {
      setUserToken(token);
      dispatch(loginRequest(profile));
      return apiLogin()
      .then(response => dispatch(loginResponse(response)))
      .catch(error => dispatch(loginError(JSON.parse(error.responseText).errors)))
    } else {
      dispatch(loginError(error))
    }
  };
}

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";

function logoutRequest() {
  return {
    type: LOGOUT_REQUEST
  };
}

export function logout() {
  return dispatch => {
    deleteUserToken();
    dispatch(logoutRequest());
  };
}

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_RESPONSE = "SIGNUP_RESPONSE";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

function signupRequest(data) {
  return {
    type: SIGNUP_REQUEST,
    data: data
  };
}

function signupResponse(response) {
  return {
    type: SIGNUP_RESPONSE,
    data: response
  };
}

function signupError(error) {
  return {
    type: SIGNUP_ERROR,
    errors: error
  };
}

export function signup(error, profile, token) {
  return dispatch => {
    if (token) {
      setUserToken(token);
      dispatch(signupRequest(profile));
      let data = {
        email: profile.email
      }
      return apiSignup(data)
      .then(response => dispatch(signupResponse(response)))
      .catch(error => dispatch(signupError(JSON.parse(error.responseText).errors)))
    } else {
      dispatch(signupError(error))
    }
  };
}
