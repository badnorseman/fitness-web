"use strict";
import { create, destroy, fetchById, update } from "../api/api";

const entityName = "user";

export const USER_CREATE_REQUEST = "USER_CREATE_REQUEST";
export const USER_CREATE_RESPONSE = "USER_CREATE_RESPONSE";
export const USER_CREATE_ERROR = "USER_CREATE_ERROR";

function userCreateRequest(data) {
  return {
    type: USER_CREATE_REQUEST,
    data: data
  };
}

function userCreateResponse(response) {
  const normalized = normalize(response, arrayOf(userSchema));
  return {
    type: USER_CREATE_RESPONSE,
    data: normalized.entities.users
  };
}

function userCreateError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: USER_CREATE_ERROR,
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

export const USER_DESTROY_REQUEST = "USER_DESTROY_REQUEST";
export const USER_DESTROY_RESPONSE = "USER_DESTROY_RESPONSE";
export const USER_DESTROY_ERROR = "USER_DESTROY_ERROR";

function userDestroyRequest(id) {
  return {
    type: USER_DESTROY_REQUEST,
    id: id
  };
}

function userDestroyResponse(response) {
  return {
    type: USER_DESTROY_RESPONSE,
    data: response
  };
}

function userDestroyError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: USER_DESTROY_ERROR,
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

export const USER_FETCH_REQUEST = "USER_FETCH_REQUEST";
export const USER_FETCH_RESPONSE = "USER_FETCH_RESPONSE";
export const USER_FETCH_ERROR = "USER_FETCH_ERROR";

function userFetchRequest(id) {
  return {
    type: USER_FETCH_REQUEST,
    id: id
  };
}

function userFetchResponse(response) {
  return {
    type: USER_FETCH_RESPONSE,
    data: response
  };
}

function userFetchError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: USER_FETCH_ERROR,
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

export const USER_UPDATE_REQUEST = "USER_UPDATE_REQUEST";
export const USER_UPDATE_RESPONSE = "USER_UPDATE_RESPONSE";
export const USER_UPDATE_ERROR = "USER_UPDATE_ERROR";

function userUpdateRequest(data) {
  return {
    type: USER_UPDATE_REQUEST,
    data: data
  };
}

function userUpdateResponse(response) {
  return {
    type: USER_UPDATE_RESPONSE,
    data: response
  };
}

function userUpdateError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: USER_UPDATE_ERROR,
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
