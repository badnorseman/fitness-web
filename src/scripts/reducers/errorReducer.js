"use strict";
import {
  ERROR_RESET
} from "../actions/errorActions";

export default function errorReducer(state = null, action) {
  const { type, error } = action;

  if (type === ERROR_RESET) {
    return null;
  } else if (error) {
    return action.errors;
  }

  return state;
}
