"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { create, destroy, fetchById, update } from "../api/api";

const entityName = "user";

function userCreateRequest(data) {
  return {
    type:  ACTION_TYPES.USER_CREATE_REQUEST,
    data: data
  };
}

function userCreateResponse(response) {
  const normalized = normalize(response, arrayOf(userSchema));
  return {
    type:  ACTION_TYPES.USER_CREATE_RESPONSE,
    data: normalized.entities.users
  };
}

function userCreateError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type:  ACTION_TYPES.USER_CREATE_ERROR,
    errors: errors
  };
}

export function createUser(data) {
  return dispatch => {
    dispatch(userCreateRequest(data));
    return create(entityName, data)
    .then(() => fetchAll(entityName))
    .then(response => dispatch(userCreateResponse(response)))
    .catch(error => dispatch(userCreateError(error)))
  };
}

function userDestroyRequest(id) {
  return {
    type:  ACTION_TYPES.USER_DESTROY_REQUEST,
    id: id
  };
}

function userDestroyResponse(response) {
  return {
    type:  ACTION_TYPES.USER_DESTROY_RESPONSE,
    data: response
  };
}

function userDestroyError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type:  ACTION_TYPES.USER_DESTROY_ERROR,
    errors: errors
  };
}

export function destroyUser(id) {
  return dispatch => {
    dispatch(userDestroyRequest(id));
    return destroy(entityName, id)
    .then(response => dispatch(userDestroyResponse(response)))
    .catch(error => dispatch(userDestroyError(error)))
  };
}

function userFetchRequest(id) {
  return {
    type:  ACTION_TYPES.USER_FETCH_REQUEST,
    id: id
  };
}

function userFetchResponse(response) {
  return {
    type:  ACTION_TYPES.USER_FETCH_RESPONSE,
    data: response
  };
}

function userFetchError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type:  ACTION_TYPES.USER_FETCH_ERROR,
    errors: errors
  };
}

export function getUser(id) {
  return dispatch => {
    dispatch(userFetchRequest(id));
    return fetchById(entityName, id)
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
