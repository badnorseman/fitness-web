"use strict";
import $ from "jquery";
import * as types from "../constants/action_types";
import { Schema, arrayOf, normalize } from "normalizr";
import { SERVER } from "../constants/server";
import { buildHeaders } from "../utils/build_http";

const coachSchema = new Schema("coaches", { idAttribute: "id" });
const entityName = "coach";

const buildUrl = () => {
  const pluralized = `${entityName.toLowerCase()}es`;
  return `${SERVER}/${pluralized}`;
};

const fetchAll = () => {
  const url = buildUrl(SERVER, entityName);
  const headers = buildHeaders();
  return Promise.resolve(
    $.ajax({
      url: url,
      dataType: "json",
      type: "GET",
      headers: headers
    })
  );
};

function coachFetchRequest() {
  return {
    type: types.COACH_FETCH_REQUEST
  };
}

function coachFetchResponse(response) {
  const normalized = normalize(response, arrayOf(coachSchema));
  return {
    type: types.COACH_FETCH_RESPONSE,
    data: normalized.entities.coaches
  };
}

function coachFetchError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: types.COACH_FETCH_ERROR,
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
