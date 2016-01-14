"use strict";
import * as  ActionTypes from "../constants/action_types";

const initialState = {
  clientToken: "",
  isFetching: false,
  transactions: {}
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case  ActionTypes.CLIENT_TOKEN_SUCCESS:
      return {
        ...state,
        clientToken: action.clientToken
      };

    case  ActionTypes.TRANSACTION_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case  ActionTypes.TRANSACTION_FETCH_SUCCESS:
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
