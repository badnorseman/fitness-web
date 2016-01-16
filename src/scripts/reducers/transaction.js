"use strict";
import * as actionTypes from "../constants/action_types";

const initialState = {
  clientToken: "",
  isFetching: false,
  transactions: {}
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLIENT_TOKEN_SUCCESS:
      return {
        ...state,
        clientToken: action.clientToken
      };

    case actionTypes.TRANSACTION_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case actionTypes.TRANSACTION_FETCH_SUCCESS:
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
