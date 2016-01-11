"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { arrayOf, normalize, Schema } from "normalizr";
import { create, fetchAll, fetchClientToken } from "../api/api";
import { makeAction } from "../utils/make_action";

const transactionSchema = new Schema("transactions", { idAttribute: "id" });
const entityName = "transaction";

const clientTokenRequest = makeAction(ACTION_TYPES.CLIENT_TOKEN_REQUEST);
const clientTokenSuccess = makeAction(ACTION_TYPES.CLIENT_TOKEN_SUCCESS, "clientToken");
const clientTokenError = makeAction(ACTION_TYPES.CLIENT_TOKEN_ERROR, "errors");

const getClientToken = () => {
  return dispatch => {
    dispatch(clientTokenRequest());
    return fetchClientToken(entityName)
      .then(success => dispatch(clientTokenSuccess(success.client_token)))
      .catch(error => dispatch(clientTokenError(error.statusText)))
  };
};

const transactionCreateRequest = makeAction(ACTION_TYPES.TRANSACTION_CREATE_REQUEST, "data");
const transactionCreateSuccess = makeAction(ACTION_TYPES.TRANSACTION_CREATE_SUCCESS, "data");
const transactionCreateError = makeAction(ACTION_TYPES.TRANSACTION_CREATE_ERROR, "errors");

const createTransaction = (data) => {
  return dispatch => {
    dispatch(transactionCreateRequest(data));
    return create(entityName, data)
      .then(success => {
        const normalized = normalize(success, arrayOf(transactionSchema));
        dispatch(transactionCreateSuccess(normalized.entities.transactions))})
      .then(() => dispatch(getTransactions()))
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(transactionCreateError(errors))})
  };
};

const transactionFetchRequest = makeAction(ACTION_TYPES.TRANSACTION_FETCH_REQUEST);
const transactionFetchSuccess = makeAction(ACTION_TYPES.TRANSACTION_FETCH_SUCCESS, "data");
const transactionFetchError = makeAction(ACTION_TYPES.TRANSACTION_FETCH_ERROR, "errors");

const getTransactions = () => {
  return dispatch => {
    dispatch(transactionFetchRequest());
    return fetchAll(entityName)
      .then(success => {
        const normalized = normalize(success, arrayOf(transactionSchema));
        dispatch(transactionFetchSuccess(normalized.entities.transactions))})
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(transactionFetchError(errors))})
  };
};

export {
  getClientToken,
  createTransaction,
  getTransactions
};
