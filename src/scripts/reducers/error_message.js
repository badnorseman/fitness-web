"use strict";
import * as  ActionTypes from "../constants/action_types";

const errorMessage = (state = null, action) => {
  const { type, errors } = action;

  if (type ===  ActionTypes.RESET_ERROR_MESSAGE ||
    type ===  ActionTypes.ROUTE_CHANGE) {
    return null;
  } else if (errors) {
    return errors;
  }

  return state;
};

export default errorMessage
