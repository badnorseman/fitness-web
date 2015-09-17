"use strict";
import {
  RESET_ERROR_MESSAGE
} from "../actions/errorActions";
import {
  ROUTE_CHANGE
} from "../actions/routeActions";

export default function errorMessage(state = null, action) {
  const { type, errors } = action;

  if (type === RESET_ERROR_MESSAGE || type === ROUTE_CHANGE) {
    return null;
  } else if (errors) {
    return errors;
  }

  return state;
}
