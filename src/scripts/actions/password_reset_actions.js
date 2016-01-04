"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { Schema, arrayOf, normalize } from "normalizr";
import { create, update } from "../api/api";

const passwordResetSchema = new Schema("passwordResets", { idAttribute: "id" });
const entityName = "password_reset";

function passwordResetCreateRequest(data) {
  return {
    type:  ACTION_TYPES.PASSWORD_RESET_CREATE_REQUEST,
    data: data
  };
}

function passwordResetCreateResponse(response) {
  const normalized = normalize(response, arrayOf(passwordResetSchema));
  return {
    type:  ACTION_TYPES.PASSWORD_RESET_CREATE_RESPONSE,
    data: normalized.entities.users
  };
}

function passwordResetCreateError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type:  ACTION_TYPES.PASSWORD_RESET_CREATE_ERROR,
    errors: errors
  };
}

export function createPasswordReset(data) {
  return dispatch => {
    dispatch(passwordResetCreateRequest(data));
    return create(entityName, data)
    .then(response => dispatch(passwordResetCreateResponse(response)))
    .catch(error => dispatch(passwordResetCreateError(error)))
  };
}

function passwordResetUpdateRequest(data) {
  return {
    type:  ACTION_TYPES.PASSWORD_RESET_UPDATE_REQUEST,
    data: data
  };
}

function passwordResetUpdateResponse(response) {
  return {
    type:  ACTION_TYPES.PASSWORD_RESET_UPDATE_RESPONSE,
    data: response
  };
}

function passwordResetUpdateError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type:  ACTION_TYPES.PASSWORD_RESET_UPDATE_ERROR,
    errors: errors
  };
}

export function updatePasswordReset(data) {
  return dispatch => {
    dispatch(passwordResetUpdateRequest(data));
    return update(entityName, data)
      .then(response => dispatch(passwordResetUpdateResponse(response)))
      .catch(error => dispatch(passwordResetUpdateError(error)))
  };
}
