"use strict";
import {
  CLIENT_TOKEN_ERROR,
  CLIENT_TOKEN_RESPONSE,
  TRANSACTION_ERROR_RESET,
  TRANSACTION_CREATE_REQUEST,
  TRANSACTION_CREATE_RESPONSE,
  TRANSACTION_CREATE_ERROR,
  TRANSACTION_FETCH_REQUEST,
  TRANSACTION_FETCH_RESPONSE,
  TRANSACTION_FETCH_ERROR
} from "../actions/transactionActions";

const initialState = {
  clientToken: "",
  errors: [],
  isFetching: false,
  transactions: {}
};

export default function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case CLIENT_TOKEN_RESPONSE:
      return Object.assign({}, state, {
        clientToken: action.clientToken
      });

    case TRANSACTION_ERROR_RESET:
      return Object.assign({}, state, {
        errors: [],
        isFetching: false
      });

    case TRANSACTION_CREATE_REQUEST:
    case TRANSACTION_FETCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });

    case TRANSACTION_CREATE_RESPONSE:
    case TRANSACTION_FETCH_RESPONSE:
      return Object.assign({}, state, {
        errors: [],
        isFetching: false,
        transactions: action.data
      });

    case CLIENT_TOKEN_ERROR:
    case TRANSACTION_CREATE_ERROR:
    case TRANSACTION_FETCH_ERROR:
      return Object.assign({}, state, {
        errors: action.errors,
        isFetching: false
      });

    default:
      return state;
  }
}
