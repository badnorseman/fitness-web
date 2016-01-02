"use strict";
import * as  ACTION_TYPES from "../constants/action_types";

const errorMessage = (state = null, action) => {
  const { type, errors } = action;

  if (type ===  ACTION_TYPES.RESET_ERROR_MESSAGE ||
    type ===  ACTION_TYPES.ROUTE_CHANGE) {
    return null;
  } else if (errors) {
    return errors;
  }

  return state;
};

export default errorMessage
