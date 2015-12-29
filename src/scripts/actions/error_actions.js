"use strict";
import * as types from "../constants/action_types";

export function resetErrorMessage() {
  return dispatch => {
    dispatch({
      type: types.RESET_ERROR_MESSAGE
    });
  };
}
