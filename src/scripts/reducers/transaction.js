"use strict";
import * as types from "../constants/action_types";

const initialState = {
  clientToken: "",
  isFetching: false,
  transactions: {}
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case types.CLIENT_TOKEN_RESPONSE:
      return {
        ...state,
        clientToken: action.clientToken
      };

    case types.TRANSACTION_CREATE_REQUEST:
    case types.TRANSACTION_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case types.TRANSACTION_CREATE_RESPONSE:
    case types.TRANSACTION_FETCH_RESPONSE:
      return {
        ...state,
        isFetching: false,
        transactions: action.data
      };

    default:
      return state;
  }
};

export default transaction
