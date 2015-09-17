"use strict";
import {
  CLIENT_TOKEN_RESPONSE,
  TRANSACTION_CREATE_REQUEST,
  TRANSACTION_CREATE_RESPONSE,
  TRANSACTION_FETCH_REQUEST,
  TRANSACTION_FETCH_RESPONSE
} from "../actions/transactionActions";

const initialState = {
  clientToken: "",
  isFetching: false,
  transactions: {}
};

export default function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case CLIENT_TOKEN_RESPONSE:
      return Object.assign({}, state, {
        clientToken: action.clientToken
      });

    case TRANSACTION_CREATE_REQUEST:
    case TRANSACTION_FETCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });

    case TRANSACTION_CREATE_RESPONSE:
    case TRANSACTION_FETCH_RESPONSE:
      return Object.assign({}, state, {
        isFetching: false,
        transactions: action.data
      });

    default:
      return state;
  }
}
