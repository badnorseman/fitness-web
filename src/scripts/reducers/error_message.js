"use strict";
import {
  RESET_ERROR_MESSAGE
} from "../actions/error_actions";
import {
  ROUTE_CHANGE
} from "../actions/router_actions";

const errorMessage = (state = null, action) => {
  const { type, errors } = action;

  if (type === RESET_ERROR_MESSAGE || type === ROUTE_CHANGE) {
    return null;
  } else if (errors) {
    return errors;
  }

  return state;
};

export default errorMessage
