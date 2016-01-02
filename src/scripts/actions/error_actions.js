"use strict";
import * as  ACTION_TYPES from "../constants/action_types";

export function resetErrorMessage() {
  return dispatch => {
    dispatch({
      type:  ACTION_TYPES.RESET_ERROR_MESSAGE
    });
  };
}
