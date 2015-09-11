"use strict";
import {
  RESET_ERROR_MESSAGE
} from "../actions/errorActions";

export default function errorMessage(state = null, action) {
  const { type, errors } = action;

  if (type === RESET_ERROR_MESSAGE) {
    return null;
  } else if (errors) {
    return errors;
  }

  return state;
}
