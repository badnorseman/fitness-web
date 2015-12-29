"use strict";
import * as types from "../constants/action_types";
import {
  login as apiLogin,
  signup as apiSignup
} from "../api/auth0_api";

function loginRequest(token) {
  return {
    type: types.AUTH0LOGIN_REQUEST,
    data: token
  };
}

function loginResponse(response) {
  return {
    type: types.AUTH0LOGIN_RESPONSE,
    data: response
  };
}

function loginError(error) {
  return {
    type: types.AUTH0LOGIN_ERROR,
    errors: error
  };
}

export function login(error, profile, token) {
  return dispatch => {
    if (token) {
      dispatch(loginRequest(token));
      return apiLogin()
      .then(response => dispatch(loginResponse(response)))
      .catch(error => dispatch(loginError(JSON.parse(error.responseText).errors)))
    } else {
      dispatch(loginError(error))
    }
  };
}

function signupRequest(token) {
  return {
    type: types.AUTH0SIGNUP_REQUEST,
    data: token
  };
}

function signupResponse(response) {
  return {
    type: types.AUTH0SIGNUP_RESPONSE,
    data: response
  };
}

function signupError(error) {
  return {
    type: types.AUTH0SIGNUP_ERROR,
    errors: error
  };
}

export function signup(error, profile, token) {
  return dispatch => {
    if (token) {
      dispatch(signupRequest(token));
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
