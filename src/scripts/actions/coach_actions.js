"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { Schema, arrayOf, normalize } from "normalizr";
import { fetchAll } from "../api/api";

const coachSchema = new Schema("coaches", { idAttribute: "id" });
const entityName = "coach";

function coachFetchRequest() {
  return {
    type:  ACTION_TYPES.COACH_FETCH_REQUEST
  };
}

function coachFetchResponse(response) {
  const normalized = normalize(response, arrayOf(coachSchema));
  return {
    type:  ACTION_TYPES.COACH_FETCH_RESPONSE,
    data: normalized.entities.coaches
  };
}

function coachFetchError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type:  ACTION_TYPES.COACH_FETCH_ERROR,
    errors: errors
  };
}

export function getCoaches() {
  return dispatch => {
    dispatch(coachFetchRequest());
    return fetchAll(entityName)
      .then(response => dispatch(coachFetchResponse(response)))
      .catch(error => dispatch(coachFetchError(error)))
  };
}
