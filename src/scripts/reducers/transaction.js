"use strict";
import * as  ACTION_TYPES from "../constants/action_types";

const initialState = {
  clientToken: "",
  isFetching: false,
  transactions: {}
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case  ACTION_TYPES.CLIENT_TOKEN_SUCCESS:
      return {
        ...state,
        clientToken: action.clientToken
      };

    case  ACTION_TYPES.TRANSACTION_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case  ACTION_TYPES.TRANSACTION_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        transactions: action.data
      };

    case  ACTION_TYPES.TRANSACTION_CREATE_REQUEST:
    case  ACTION_TYPES.TRANSACTION_CREATE_SUCCESS:
      return state;

    default:
      return state;
  }
};

export default transaction
