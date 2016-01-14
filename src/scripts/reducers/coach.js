"use strict";
import * as  actionTypes from "../constants/action_types";

const initialState = {
  isFetching: false,
  coaches: {}
};

const coach = (state = initialState, action) => {
  switch (action.type) {
    case  actionTypes.COACH_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case  actionTypes.COACH_FETCH_SUCCESS:
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
