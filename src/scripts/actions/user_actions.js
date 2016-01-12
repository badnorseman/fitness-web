"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { fetchAll, update } from "../api/api";
import { makeAction } from "../utils/make_action";

const entityName = "user";

const userFetchRequest = makeAction(ACTION_TYPES.USER_FETCH_REQUEST);
const userFetchSuccess = makeAction(ACTION_TYPES.USER_FETCH_SUCCESS, "data");
const userFetchError = makeAction(ACTION_TYPES.USER_FETCH_ERROR, "errors");

const getUsers = () => {
  return dispatch => {
    dispatch(userFetchRequest());
    return fetchAll(entityName)
      .then(success => {
        const normalized = normalize(success, arrayOf(userSchema));
        dispatch(userFetchSuccess(normalized.entities.users))})
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(userFetchError(errors))})
  };
};

const userUpdateRequest = makeAction(ACTION_TYPES.USER_UPDATE_REQUEST, "data");
const userUpdateSuccess = makeAction(ACTION_TYPES.USER_UPDATE_SUCCESS, "data");
const userUpdateError = makeAction(ACTION_TYPES.USER_UPDATE_ERROR, "errors");

const updateUser = (data) => {
  return dispatch => {
    dispatch(userUpdateRequest(data));
    return update(entityName, data)
      .then(success => dispatch(userUpdateSuccess(success)))
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(userUpdateError(errors))})
  };
};

export {
  getUsers,
  updateUser
};
