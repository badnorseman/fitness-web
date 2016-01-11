"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { arrayOf, normalize, Schema } from "normalizr";
import { fetchAll } from "../api/api";
import { makeAction } from "../utils/make_action";

const clientSchema = new Schema("clients", { idAttribute: "id" });
const entityName = "client";

const clientFetchRequest = makeAction(ACTION_TYPES.CLIENT_FETCH_REQUEST);
const clientFetchSuccess = makeAction(ACTION_TYPES.CLIENT_FETCH_SUCCESS, "data");
const clientFetchError = makeAction(ACTION_TYPES.CLIENT_FETCH_ERROR, "errors");

const getClients = () => {
  return dispatch => {
    dispatch(clientFetchRequest());
    return fetchAll(entityName)
      .then(success => {
        const normalized = normalize(success, arrayOf(clientSchema));
        dispatch(clientFetchSuccess(normalized.entities.clients))})
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(clientFetchError(errors))})
  };
};

export {
  getClients
};
