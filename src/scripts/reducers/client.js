"use strict";
import * as  ACTION_TYPES from "../constants/action_types";

const initialState = {
  isFetching: false,
  clients: {}
};

const client = (state = initialState, action) => {
  switch (action.type) {
    case  ACTION_TYPES.CLIENT_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case  ACTION_TYPES.CLIENT_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        clients: action.data
      };

    default:
      return state;
  }
};

export default client
