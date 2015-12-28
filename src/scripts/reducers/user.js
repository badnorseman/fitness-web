"use strict";
import * as types from "../constants/action_types";

const initialState = {
  isFetching: false,
  users: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case types.USER_FETCH_RESPONSE:
      return {
        ...state,
        isFetching: false,
        users: action.data
      };

    default:
      return state;
  }
};

export default user
