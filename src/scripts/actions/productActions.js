import { Schema, arrayOf, normalize } from "normalizr";
import { create, destroy, fetchAll, update } from "../api/api";

const productSchema = new Schema("products", { idAttribute: "id" });
const entityName = "product";

export const PRODUCT_ERROR_RESET = "PRODUCT_ERROR_RESET";

export function resetError() {
  return dispatch => {
    dispatch({
      type: PRODUCT_ERROR_RESET
    });
  };
}

export const PRODUCT_CREATE_REQUEST = "PRODUCT_CREATE_REQUEST";
export const PRODUCT_CREATE_RESPONSE = "PRODUCT_CREATE_RESPONSE";
export const PRODUCT_CREATE_ERROR = "PRODUCT_CREATE_ERROR";

function productCreateRequest(data) {
  return {
    type: PRODUCT_CREATE_REQUEST,
    data: data
  };
}

function productCreateResponse(response) {
  const normalized = normalize(response, arrayOf(productSchema));
  return {
    type: PRODUCT_CREATE_RESPONSE,
    data: normalized.entities.products
  };
}

function productCreateError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: PRODUCT_CREATE_ERROR,
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

export const PRODUCT_DESTROY_REQUEST = "PRODUCT_DESTROY_REQUEST";
export const PRODUCT_DESTROY_RESPONSE = "PRODUCT_DESTROY_RESPONSE";
export const PRODUCT_DESTROY_ERROR = "PRODUCT_DESTROY_ERROR";

function productDestroyRequest(id) {
  return {
    type: PRODUCT_DESTROY_REQUEST,
    id: id
  };
}

function productDestroyResponse(response) {
  const normalized = normalize(response, arrayOf(productSchema));
  return {
    type: PRODUCT_DESTROY_RESPONSE,
    data: normalized.entities.products
  };
}

function productDestroyError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: PRODUCT_DESTROY_ERROR,
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

export const PRODUCT_FETCH_REQUEST = "PRODUCT_FETCH_REQUEST";
export const PRODUCT_FETCH_RESPONSE = "PRODUCT_FETCH_RESPONSE";
export const PRODUCT_FETCH_ERROR = "PRODUCT_FETCH_ERROR";

function productFetchRequest() {
  return {
    type: PRODUCT_FETCH_REQUEST
  };
}

function productFetchResponse(response) {
  const normalized = normalize(response, arrayOf(productSchema));
  return {
    type: PRODUCT_FETCH_RESPONSE,
    data: normalized.entities.products
  };
}

function productFetchError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: PRODUCT_FETCH_ERROR,
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

export const PRODUCT_UPDATE_REQUEST = "PRODUCT_UPDATE_REQUEST";
export const PRODUCT_UPDATE_RESPONSE = "PRODUCT_UPDATE_RESPONSE";
export const PRODUCT_UPDATE_ERROR = "PRODUCT_UPDATE_ERROR";

function productUpdateRequest(data) {
  return {
    type: PRODUCT_UPDATE_REQUEST,
    data: data
  };
}

function productUpdateResponse(response) {
  const normalized = normalize(response, arrayOf(productSchema));
  return {
    type: PRODUCT_UPDATE_RESPONSE,
    data: normalized.entities.products
  };
}

function productUpdateError(error) {
  const errors = JSON.parse(error.responseText).errors;
  return {
    type: PRODUCT_UPDATE_ERROR,
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
