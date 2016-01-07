"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { arrayOf, normalize, Schema } from "normalizr";
import { create, fetchAll, fetchClientToken } from "../api/api";
import { makeAction, makeErrorAction } from "../utils/make_actions";

const transactionSchema = new Schema("transactions", { idAttribute: "id" });
const entityName = "transaction";

const clientTokenRequest = makeAction(ACTION_TYPES.CLIENT_TOKEN_REQUEST);
const clientTokenResponse = makeAction(ACTION_TYPES.CLIENT_TOKEN_RESPONSE, "clientToken");
const clientTokenError = makeErrorAction(ACTION_TYPES.CLIENT_TOKEN_ERROR, "error");

const getClientToken = () => {
  return dispatch => {
    dispatch(clientTokenRequest());
    return fetchClientToken(entityName)
      .then(response => dispatch(clientTokenResponse(response.client_token)))
      .catch(error => dispatch(clientTokenError(error)))
  };
};

const transactionCreateRequest = makeAction(ACTION_TYPES.TRANSACTION_CREATE_REQUEST, "data");
const transactionCreateResponse = makeAction(ACTION_TYPES.TRANSACTION_CREATE_RESPONSE, "data");
const transactionCreateError = makeErrorAction(ACTION_TYPES.TRANSACTION_CREATE_ERROR, "error");

const createTransaction = (data) => {
  return dispatch => {
    dispatch(transactionCreateRequest(data));
    return create(entityName, data)
    .then(() => fetchAll(entityName))
    .then(response => {
      const normalized = normalize(response, arrayOf(transactionSchema));
      dispatch(transactionCreateResponse(normalized.entities.transactions))})
    .catch(error => dispatch(transactionCreateError(error)))
  };
};

const transactionFetchRequest = makeAction(ACTION_TYPES.TRANSACTION_FETCH_REQUEST);
const transactionFetchResponse = makeAction(ACTION_TYPES.TRANSACTION_FETCH_RESPONSE, "data");
const transactionFetchError = makeErrorAction(ACTION_TYPES.TRANSACTION_FETCH_ERROR, "error");

const getTransactions = () => {
  return dispatch => {
    dispatch(transactionFetchRequest());
    return fetchAll(entityName)
      .then(response => {
        const normalized = normalize(response, arrayOf(transactionSchema));
        dispatch(transactionFetchResponse(normalized.entities.transactions))})
      .catch(error => dispatch(transactionFetchError(error)))
  };
};

export {
  getClientToken,
  createTransaction,
  getTransactions
};
