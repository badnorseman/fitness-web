"use strict";
import * as types from "../constants/action_types";

const initialState = {
  isFetching: false,
  coaches: {}
};

const coach = (state = initialState, action) => {
  switch (action.type) {
    case types.COACH_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case types.COACH_FETCH_RESPONSE:
      return {
        ...state,
        isFetching: false,
        coaches: action.data
      };

    default:
      return state;
  }
};

export default coach
