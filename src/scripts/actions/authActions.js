"use strict";
import {
  auth0Login as apiAuth0Login,
  auth0Signup as apiAuth0Signup,
  login as apiLogin,
  logout as apiLogout,
  oauth as apiOauth,
  signup as apiSignup
} from "../api/api";

function deleteUserToken() {
  localStorage.removeItem("userToken");
}

function setUserToken(token) {
  localStorage.setItem("userToken", token);
}

export const AUTH0LOGIN_REQUEST = "AUTH0LOGIN_REQUEST";
export const AUTH0LOGIN_RESPONSE = "AUTH0LOGIN_RESPONSE";
export const AUTH0LOGIN_ERROR = "AUTH0LOGIN_ERROR";

function auth0LoginRequest(data) {
  return {
    type: AUTH0LOGIN_REQUEST,
    data: data
  };
}

function auth0LoginResponse(response) {
  return {
    type: AUTH0LOGIN_RESPONSE,
    data: response
  };
}

function auth0LoginError(error) {
  return {
    type: AUTH0LOGIN_ERROR,
    errors: error
  };
}

export function auth0Login(error, profile, token) {
  return dispatch => {
    if (token) {
      setUserToken(token);
      dispatch(auth0LoginRequest(profile));
      return apiAuth0Login()
      .then(response => dispatch(auth0LoginResponse(response)))
      .catch(error => dispatch(auth0LoginError(JSON.parse(error.responseText).errors)))
    } else {
      dispatch(auth0LoginError(error))
    }
  };
}

export const AUTH0LOGOUT_REQUEST = "AUTH0LOGOUT_REQUEST";

function auth0LogoutRequest() {
  return {
    type: AUTH0LOGOUT_REQUEST
  };
}

export function auth0Logout() {
  return dispatch => {
    deleteUserToken();
    dispatch(auth0LogoutRequest());
  };
}

export const AUTH0SIGNUP_REQUEST = "AUTH0SIGNUP_REQUEST";
export const AUTH0SIGNUP_RESPONSE = "AUTH0SIGNUP_RESPONSE";
export const AUTH0SIGNUP_ERROR = "AUTH0SIGNUP_ERROR";

function auth0SignupRequest(data) {
  return {
    type: AUTH0SIGNUP_REQUEST,
    data: data
  };
}

function auth0SignupResponse(response) {
  return {
    type: AUTH0SIGNUP_RESPONSE,
    data: response
  };
}

function auth0SignupError(error) {
  return {
    type: AUTH0SIGNUP_ERROR,
    errors: error
  };
}

export function auth0Signup(error, profile, token) {
  return dispatch => {
    if (token) {
      setUserToken(token);
      dispatch(auth0SignupRequest(profile));
      let data = {
        email: profile.email
      }
      return apiAuth0Signup(data)
      .then(response => dispatch(auth0SignupResponse(response)))
      .catch(error => dispatch(auth0SignupError(JSON.parse(error.responseText).errors)))
    } else {
      dispatch(auth0SignupError(error))
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

export const OAUTH_REQUEST = "OAUTH_REQUEST";
export const OAUTH_RESPONSE = "OAUTH_RESPONSE";
export const OAUTH_ERROR = "OAUTH_ERROR";

function oauthRequest(provider) {
  return {
    type: OAUTH_REQUEST,
    provider: provider
  };
}

function oauthResponse(response) {
  return {
    type: OAUTH_RESPONSE,
    data: response
  };
}

function oauthError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: OAUTH_ERROR,
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
