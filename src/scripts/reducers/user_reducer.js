"use strict";
import {
  USER_FETCH_REQUEST,
  USER_FETCH_RESPONSE
} from "../actions/user_actions";

const initialState = {
  isFetching: false,
  users: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });

    case USER_FETCH_RESPONSE:
      return Object.assign({}, state, {
        isFetching: false,
        users: action.data
      });

    default:
      return state;
  }
}
