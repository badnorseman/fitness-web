"use strict";
import {
  USER_FETCH_REQUEST,
  USER_FETCH_RESPONSE
} from "../actions/user_actions";

const initialState = {
  isFetching: false,
  users: {}
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case USER_FETCH_RESPONSE:
      return {
        ...state,
        isFetching: false,
        users: action.data
      };

    default:
      return state;
  }
}
