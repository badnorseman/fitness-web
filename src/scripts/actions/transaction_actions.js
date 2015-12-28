"use strict";
import * as types from "../constants/action_types";
import { Schema, arrayOf, normalize } from "normalizr";
import { create, fetchAll, fetchClientToken } from "../api/api";

const transactionSchema = new Schema("transactions", { idAttribute: "id" });
const entityName = "transaction";

function clientTokenRequest() {
  return {
    type: types.CLIENT_TOKEN_REQUEST
  };
}

function clientTokenResponse(response) {
  return {
    type: types.CLIENT_TOKEN_RESPONSE,
    clientToken: response.client_token
  };
}

function clientTokenError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: types.CLIENT_TOKEN_ERROR,
    errors: errors
  };
}

export function getClientToken() {
  return dispatch => {
    dispatch(clientTokenRequest());
    return fetchClientToken(entityName)
      .then(response => dispatch(clientTokenResponse(response)))
      .catch(error => dispatch(clientTokenError(error)))
  };
}

function transactionCreateRequest(data) {
  return {
    type: types.TRANSACTION_CREATE_REQUEST,
    data: data
  };
}

function transactionCreateResponse(response) {
  const normalized = normalize(response, arrayOf(transactionSchema));
  return {
    type: types.TRANSACTION_CREATE_RESPONSE,
    data: normalized.entities.transactions
  };
}

function transactionCreateError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: types.TRANSACTION_CREATE_ERROR,
    errors: errors
  };
}

export function createTransaction(data) {
  return dispatch => {
    dispatch(transactionCreateRequest(data));
    return create(entityName, data)
    .then(() => fetchAll(entityName))
    .then(response => dispatch(transactionCreateResponse(response)))
    .catch(error => dispatch(transactionCreateError(error)))
  };
}

function transactionFetchRequest() {
  return {
    type: types.TRANSACTION_FETCH_REQUEST
  };
}

function transactionFetchResponse(response) {
  const normalized = normalize(response, arrayOf(transactionSchema));
  return {
    type: types.TRANSACTION_FETCH_RESPONSE,
    data: normalized.entities.transactions
  };
}

function transactionFetchError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: types.TRANSACTION_FETCH_ERROR,
    errors: errors
  };
}

export function getTransactions() {
  return dispatch => {
    dispatch(transactionFetchRequest());
    return fetchAll(entityName)
      .then(response => dispatch(transactionFetchResponse(response)))
      .catch(error => dispatch(transactionFetchError(error)))
  };
}
