"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { arrayOf, normalize, Schema } from "normalizr";
import { fetchAll } from "../api/api";
import { makeAction } from "../utils/make_action";

const coachSchema = new Schema("coaches", { idAttribute: "id" });
const entityName = "coach";

const coachFetchRequest = makeAction(ACTION_TYPES.COACH_FETCH_REQUEST);
const coachFetchResponse = makeAction(ACTION_TYPES.COACH_FETCH_RESPONSE, "data");
const coachFetchError = makeAction(ACTION_TYPES.COACH_FETCH_ERROR, "errors");

const getCoaches = () => {
  return dispatch => {
    dispatch(coachFetchRequest());
    return fetchAll(entityName)
      .then(success => {
        const normalized = normalize(success, arrayOf(coachSchema));
        dispatch(coachFetchResponse(normalized.entities.coaches))})
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(coachFetchError(errors))})
  };
};

export { getCoaches };
