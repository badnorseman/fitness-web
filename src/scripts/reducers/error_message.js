"use strict";
import * as actionTypes from "../constants/action_types";

const errorMessage = (state = null, action) => {
  const { type, errors } = action;

  if (type === actionTypes.RESET_ERROR_MESSAGE ||
    type === actionTypes.GOTO) {
    return null;
  } else if (errors) {
    return errors;
  }

  return state;
};

export default errorMessage
