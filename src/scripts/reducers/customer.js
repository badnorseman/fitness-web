"use strict";
import * as  ACTION_TYPES from "../constants/action_types";

const initialState = {
  isFetching: false,
  customers: {}
};

const customer = (state = initialState, action) => {
  switch (action.type) {
    case  ACTION_TYPES.CUSTOMER_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case  ACTION_TYPES.CUSTOMER_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        customers: action.data
      };

    default:
      return state;
  }
};

export default customer
