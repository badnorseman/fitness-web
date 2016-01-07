"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { arrayOf, normalize, Schema } from "normalizr";
import { fetchAll, update } from "../api/api";
import { makeAction, makeErrorAction } from "../utils/make_actions";

const userSchema = new Schema("users", { idAttribute: "id" });
const entityName = "user";

const userFetchRequest = makeAction(ACTION_TYPES.USER_FETCH_REQUEST);
const userFetchResponse = makeAction(ACTION_TYPES.USER_FETCH_RESPONSE, "data");
const userFetchError = makeErrorAction(ACTION_TYPES.USER_FETCH_ERROR, "error");

const getUsers = () => {
  return dispatch => {
    dispatch(userFetchRequest());
    return fetchAll(entityName)
      .then(response => {
        const normalized = normalize(response, arrayOf(userSchema));
        dispatch(userFetchResponse(normalized.entities.users))})
      .catch(error => dispatch(userFetchError(error)))
  };
};

const userUpdateRequest = makeAction(ACTION_TYPES.USER_UPDATE_REQUEST, "data");
const userUpdateResponse = makeAction(ACTION_TYPES.USER_UPDATE_RESPONSE, "data");
const userUpdateError = makeErrorAction(ACTION_TYPES.USER_UPDATE_ERROR, "error");

const updateUser = (data) => {
  return dispatch => {
    dispatch(userUpdateRequest(data));
    return update(entityName, data)
      .then(response => dispatch(userUpdateResponse(response)))
      .catch(error => dispatch(userUpdateError(error)))
  };
};

export {
  getUsers,
  updateUser
};
