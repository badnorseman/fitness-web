"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { Schema, arrayOf, normalize } from "normalizr";
import { fetchAll, update } from "../api/api";

const userSchema = new Schema("users", { idAttribute: "id" });
const entityName = "user";

function userFetchRequest() {
  return {
    type:  ACTION_TYPES.USER_FETCH_REQUEST,
    id: id
  };
}

function userFetchResponse(response) {
  const normalized = normalize(response, arrayOf(userSchema));
  return {
    type:  ACTION_TYPES.USER_FETCH_RESPONSE,
    data: normalized.entities.users
  };
}

function userFetchError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type:  ACTION_TYPES.USER_FETCH_ERROR,
    errors: errors
  };
}

export function getUsers() {
  return dispatch => {
    dispatch(userFetchRequest());
    return fetchAll(entityName)
      .then(response => dispatch(userFetchResponse(response)))
      .catch(error => dispatch(userFetchError(error)))
  };
}

function userUpdateRequest(data) {
  return {
    type:  ACTION_TYPES.USER_UPDATE_REQUEST,
    data: data
  };
}

function userUpdateResponse(response) {
  return {
    type:  ACTION_TYPES.USER_UPDATE_RESPONSE,
    data: response
  };
}

function userUpdateError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type:  ACTION_TYPES.USER_UPDATE_ERROR,
    errors: errors
  };
}

export function updateUser(data) {
  return dispatch => {
    dispatch(userUpdateRequest(data));
    return update(entityName, data)
      .then(response => dispatch(userUpdateResponse(response)))
      .catch(error => dispatch(userUpdateError(error)))
  };
}
