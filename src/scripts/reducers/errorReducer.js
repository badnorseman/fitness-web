"use strict";
import {
  ERROR_RESET
} from "../actions/errorActions";

const initialState = {
  errors: []
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case ERROR_RESET:
      return Object.assign({}, state, {
        errors: []
      });

    default:
      return state;
  }
}
