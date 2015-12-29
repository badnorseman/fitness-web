"use strict";
import * as types from "../constants/action_types";

const errorMessage = (state = null, action) => {
  const { type, errors } = action;

  if (type === types.RESET_ERROR_MESSAGE ||
    type === types.ROUTE_CHANGE) {
    return null;
  } else if (errors) {
    return errors;
  }

  return state;
};

export default errorMessage
