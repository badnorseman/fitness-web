"use strict";
import {
  USER_FETCH_REQUEST,
  USER_FETCH_RESPONSE,
  USER_DESTROY_REQUEST,
  USER_DESTROY_RESPONSE,
  USER_UPDATE_REQUEST,
  USER_UPDATE_RESPONSE
} from "../actions/userActions";

const initialState = {
  isFetching: false,
  user: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_DESTROY_REQUEST:
    case USER_FETCH_REQUEST:
    case USER_UPDATE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });

    case USER_DESTROY_RESPONSE:
    case USER_FETCH_RESPONSE:
    case USER_UPDATE_RESPONSE:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.data
      });

    default:
      return state;
  }
}
