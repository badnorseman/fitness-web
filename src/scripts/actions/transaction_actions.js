"use strict";
import * as actionTypes from "../constants/action_types";
import { arrayOf, normalize, Schema } from "normalizr";
import { create, fetchAll, fetchClientToken } from "../api/api";
import { makeAction } from "../utils/make_action";

const transactionSchema = new Schema("transactions", { idAttribute: "id" });
const ENTITY = "transaction";

const clientTokenRequest = makeAction(actionTypes.CLIENT_TOKEN_REQUEST);
const clientTokenSuccess = makeAction(actionTypes.CLIENT_TOKEN_SUCCESS, "clientToken");
const clientTokenError = makeAction(actionTypes.CLIENT_TOKEN_ERROR, "errors");

const getClientToken = () => {
  return dispatch => {
    dispatch(clientTokenRequest());
    return fetchClientToken(ENTITY)
      .then(success => dispatch(clientTokenSuccess(success.client_token)))
      .catch(error => dispatch(clientTokenError(error.statusText)))
  };
};

const transactionCreateRequest = makeAction(actionTypes.TRANSACTION_CREATE_REQUEST, "data");
const transactionCreateSuccess = makeAction(actionTypes.TRANSACTION_CREATE_SUCCESS, "data");
const transactionCreateError = makeAction(actionTypes.TRANSACTION_CREATE_ERROR, "errors");

const createTransaction = (data) => {
  return dispatch => {
    dispatch(transactionCreateRequest(data));
    return create(ENTITY, data)
      .then(success => dispatch(transactionCreateSuccess(success)))
      .then(() => dispatch(getTransactions()))
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(transactionCreateError(errors))})
  };
};

const transactionFetchRequest = makeAction(actionTypes.TRANSACTION_FETCH_REQUEST);
const transactionFetchSuccess = makeAction(actionTypes.TRANSACTION_FETCH_SUCCESS, "data");
const transactionFetchError = makeAction(actionTypes.TRANSACTION_FETCH_ERROR, "errors");

const getTransactions = () => {
  return dispatch => {
    dispatch(transactionFetchRequest());
    return fetchAll(ENTITY)
      .then(success => {
        const normalized = normalize(success, arrayOf(transactionSchema));
        dispatch(transactionFetchSuccess(normalized.entities.transactions))})
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(transactionFetchError(errors))})
  };
};

export { getClientToken, createTransaction, getTransactions };
