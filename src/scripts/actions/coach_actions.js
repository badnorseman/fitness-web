"use strict";
import * as  actionTypes from "../constants/action_types";
import { arrayOf, normalize, Schema } from "normalizr";
import { fetchAll } from "../api/api";
import { makeAction } from "../utils/make_action";

const coachSchema = new Schema("coaches", { idAttribute: "id" });
const entityName = "coach";

const coachFetchRequest = makeAction(actionTypes.COACH_FETCH_REQUEST);
const coachFetchSuccess = makeAction(actionTypes.COACH_FETCH_SUCCESS, "data");
const coachFetchError = makeAction(actionTypes.COACH_FETCH_ERROR, "errors");

const getCoaches = () => {
  return dispatch => {
    dispatch(coachFetchRequest());
    return fetchAll(entityName)
      .then(success => {
        const normalized = normalize(success, arrayOf(coachSchema));
        dispatch(coachFetchSuccess(normalized.entities.coaches))})
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(coachFetchError(errors))})
  };
};

export { getCoaches };
