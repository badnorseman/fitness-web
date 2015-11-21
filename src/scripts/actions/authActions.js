"use strict";
import $ from "jquery";
import {
  login as apiLogin,
  logout as apiLogout,
  signup as apiSignup
} from "../api/api";

export const AUTH0_REQUEST = "AUTH0_REQUEST";
export const AUTH0_RESPONSE = "AUTH0_RESPONSE";
export const AUTH0_ERROR = "AUTH0_ERROR";

function auth0Request(profile) {
  return {
    type: AUTH0_REQUEST,
    data: profile
  };
}

function auth0Response(token) {
  return {
    type: AUTH0_RESPONSE,
    data: token
  };
}

function auth0Error(error) {
  return {
    type: AUTH0_ERROR,
    errors: error
  };
}

export function auth0(error, profile, token) {
  console.log(profile);
  return dispatch => {
    dispatch(auth0Request(profile));
    if (token) {
      // Save token required in authorization header.
      dispatch(auth0Response(token));
      // Log in to api with Auth0 token.
      $.ajax({
        url: "http://localhost:3000/api/login",
        headers: { "Authorization": `Bearer ${localStorage.userToken}` },
        dataType: "json",
        type: "GET"
      });
    } else {
      dispatch(auth0Error(error));
    }
  };
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
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: LOGIN_ERROR,
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

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_RESPONSE = "LOGOUT_RESPONSE";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

function logoutRequest() {
  return {
    type: LOGOUT_REQUEST
  };
}

function logoutResponse() {
  return {
    type: LOGOUT_RESPONSE
  };
}

function logoutError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: LOGOUT_ERROR,
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
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: SIGNUP_ERROR,
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
