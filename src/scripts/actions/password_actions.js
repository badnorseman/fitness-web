"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { create, update } from "../api/api";

const entityName = "password_reset";

function passwordCreateRequest(data) {
  return {
    type:  ACTION_TYPES.PASSWORD_CREATE_REQUEST,
    data: data
  };
}

function passwordCreateResponse(response) {
  return {
    type:  ACTION_TYPES.PASSWORD_CREATE_RESPONSE,
    data: response
  };
}

function passwordCreateError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type:  ACTION_TYPES.PASSWORD_CREATE_ERROR,
    errors: errors
  };
}

export function createPassword(data) {
  return dispatch => {
    dispatch(passwordCreateRequest(data));
    return create(entityName, data)
    .then(response => dispatch(passwordCreateResponse(response)))
    .catch(error => dispatch(passwordCreateError(error)))
  };
}

function passwordUpdateRequest(data) {
  return {
    type:  ACTION_TYPES.PASSWORD_UPDATE_REQUEST,
    data: data
  };
}

function passwordUpdateResponse(response) {
  return {
    type:  ACTION_TYPES.PASSWORD_UPDATE_RESPONSE,
    data: response
  };
}

function passwordUpdateError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type:  ACTION_TYPES.PASSWORD_UPDATE_ERROR,
    errors: errors
  };
}

export function updatePassword(data) {
  return dispatch => {
    dispatch(passwordUpdateRequest(data));
    return update(entityName, data)
      .then(response => dispatch(passwordUpdateResponse(response)))
      .catch(error => dispatch(passwordUpdateError(error)))
  };
}
