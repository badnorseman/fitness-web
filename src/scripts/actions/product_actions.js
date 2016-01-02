"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { Schema, arrayOf, normalize } from "normalizr";
import { create, destroy, fetchAll, update } from "../api/api";

const productSchema = new Schema("products", { idAttribute: "id" });
const entityName = "product";

function productCreateRequest(data) {
  return {
    type:  ACTION_TYPES.PRODUCT_CREATE_REQUEST,
    data: data
  };
}

function productCreateResponse(response) {
  const normalized = normalize(response, arrayOf(productSchema));
  return {
    type:  ACTION_TYPES.PRODUCT_CREATE_RESPONSE,
    data: normalized.entities.products
  };
}

function productCreateError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type:  ACTION_TYPES.PRODUCT_CREATE_ERROR,
    errors: errors
  };
}

export function createProduct(data) {
  return dispatch => {
    dispatch(productCreateRequest(data));
    return create(entityName, data)
    .then(() => fetchAll(entityName))
    .then(response => dispatch(productCreateResponse(response)))
    .catch(error => dispatch(productCreateError(error)))
  };
}

function productDestroyRequest(id) {
  return {
    type:  ACTION_TYPES.PRODUCT_DESTROY_REQUEST,
    id: id
  };
}

function productDestroyResponse(response) {
  const normalized = normalize(response, arrayOf(productSchema));
  return {
    type:  ACTION_TYPES.PRODUCT_DESTROY_RESPONSE,
    data: normalized.entities.products
  };
}

function productDestroyError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type:  ACTION_TYPES.PRODUCT_DESTROY_ERROR,
    errors: errors
  };
}

export function destroyProduct(id) {
  return dispatch => {
    dispatch(productDestroyRequest(id));
    return destroy(entityName, id)
    .then(() => fetchAll(entityName))
    .then(response => dispatch(productDestroyResponse(response)))
    .catch(error => dispatch(productDestroyError(error)))
  };
}

function productFetchRequest() {
  return {
    type:  ACTION_TYPES.PRODUCT_FETCH_REQUEST
  };
}

function productFetchResponse(response) {
  const normalized = normalize(response, arrayOf(productSchema));
  return {
    type:  ACTION_TYPES.PRODUCT_FETCH_RESPONSE,
    data: normalized.entities.products
  };
}

function productFetchError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type:  ACTION_TYPES.PRODUCT_FETCH_ERROR,
    errors: errors
  };
}

export function getProducts() {
  return dispatch => {
    dispatch(productFetchRequest());
    return fetchAll(entityName)
      .then(response => dispatch(productFetchResponse(response)))
      .catch(error => dispatch(productFetchError(error)))
  };
}

function productUpdateRequest(data) {
  return {
    type:  ACTION_TYPES.PRODUCT_UPDATE_REQUEST,
    data: data
  };
}

function productUpdateResponse(response) {
  const normalized = normalize(response, arrayOf(productSchema));
  return {
    type:  ACTION_TYPES.PRODUCT_UPDATE_RESPONSE,
    data: normalized.entities.products
  };
}

function productUpdateError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type:  ACTION_TYPES.PRODUCT_UPDATE_ERROR,
    errors: errors
  };
}

export function updateProduct(data) {
  return dispatch => {
    dispatch(productUpdateRequest(data));
    return update(entityName, data)
      .then(() => fetchAll(entityName))
      .then(response => dispatch(productUpdateResponse(response)))
      .catch(error => dispatch(productUpdateError(error)))
  };
}
