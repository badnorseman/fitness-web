"use strict";
import {
  ERROR_RESET
} from "../actions/errorActions";

export default function errorReducer(state = null, action) {
  const { type, errors } = action;

  console.log(action);

  if (type === ERROR_RESET) {
    return null;
  } else if (errors) {
    return action.errors;
  }

  return state;
}
