"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { arrayOf, normalize, Schema } from "normalizr";
import { fetchAll } from "../api/api";
import { makeAction, makeErrorAction } from "../utils/make_actions";

const coachSchema = new Schema("coaches", { idAttribute: "id" });
const entityName = "coach";

const coachFetchRequest = makeAction(ACTION_TYPES.COACH_FETCH_REQUEST);
const coachFetchResponse = makeAction(ACTION_TYPES.COACH_FETCH_RESPONSE, "data");
const coachFetchError = makeErrorAction(ACTION_TYPES.COACH_FETCH_ERROR, "error");

const getCoaches = () => {
  return dispatch => {
    dispatch(coachFetchRequest());
    return fetchAll(entityName)
      .then(response => {
        const normalized = normalize(response, arrayOf(coachSchema));
        dispatch(coachFetchResponse(normalized.entities.coaches))})
      .catch(error => dispatch(coachFetchError(error)))
  };
};

export { getCoaches };
