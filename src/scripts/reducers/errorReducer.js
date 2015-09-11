"use strict";
import {
  RESET_ERROR_MESSAGE
} from "../actions/errorActions";

const initialState = {
  errorMessage: []
};

export default function errorMessage(state = initialState, action) {
  const { type, errors } = action;

  if (type === RESET_ERROR_MESSAGE) {
    return null;
  } else if (errors) {
    return Object.assign({}, state, {
      errorMessage: errors
    });
  }

  return state;
}
