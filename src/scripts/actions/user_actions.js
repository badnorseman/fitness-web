"use strict";
import * as  actionTypes from "../constants/action_types";
import { arrayOf, normalize, Schema } from "normalizr";
import { fetchAll, update } from "../api/api";
import { makeAction } from "../utils/make_action";

const userSchema = new Schema("users", { idAttribute: "id" });
const entityName = "user";

const userFetchRequest = makeAction(actionTypes.USER_FETCH_REQUEST);
const userFetchSuccess = makeAction(actionTypes.USER_FETCH_SUCCESS, "data");
const userFetchError = makeAction(actionTypes.USER_FETCH_ERROR, "errors");

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

const userUpdateRequest = makeAction(actionTypes.USER_UPDATE_REQUEST, "data");
const userUpdateSuccess = makeAction(actionTypes.USER_UPDATE_SUCCESS, "data");
const userUpdateError = makeAction(actionTypes.USER_UPDATE_ERROR, "errors");

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
