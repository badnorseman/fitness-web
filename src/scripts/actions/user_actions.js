"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { arrayOf, normalize, Schema } from "normalizr";
import { fetchAll, update } from "../api/api";
import { makeAction } from "../utils/make_action";

const userSchema = new Schema("users", { idAttribute: "id" });
const entityName = "user";

const userFetchRequest = makeAction(ACTION_TYPES.USER_FETCH_REQUEST);
const userFetchResponse = makeAction(ACTION_TYPES.USER_FETCH_RESPONSE, "data");
const userFetchError = makeAction(ACTION_TYPES.USER_FETCH_ERROR, "errors");

const getUsers = () => {
  return dispatch => {
    dispatch(userFetchRequest());
    return fetchAll(entityName)
      .then(success => {
        const normalized = normalize(success, arrayOf(userSchema));
        dispatch(userFetchResponse(normalized.entities.users))})
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(userFetchError(errors))})
  };
};

const userUpdateRequest = makeAction(ACTION_TYPES.USER_UPDATE_REQUEST, "data");
const userUpdateResponse = makeAction(ACTION_TYPES.USER_UPDATE_RESPONSE, "data");
const userUpdateError = makeAction(ACTION_TYPES.USER_UPDATE_ERROR, "errors");

const updateUser = (data) => {
  return dispatch => {
    dispatch(userUpdateRequest(data));
    return update(entityName, data)
      .then(success => dispatch(userUpdateResponse(success)))
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(userUpdateError(errors))})
  };
};

export {
  getUsers,
  updateUser
};
