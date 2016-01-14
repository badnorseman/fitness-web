"use strict";
import * as  ActionTypes from "../constants/action_types";

const initialState = {
  isFetching: false,
  users: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case  ActionTypes.USER_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case  ActionTypes.USER_FETCH_SUCCESS:
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
