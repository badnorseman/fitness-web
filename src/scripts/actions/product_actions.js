"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { Schema, arrayOf, normalize } from "normalizr";
import { create, destroy, fetchAll, update } from "../api/api";
import { makeErrorAction, makeRequestAction } from "../utils/make_actions";

const productSchema = new Schema("products", { idAttribute: "id" });
const entityName = "product";

const productCreateRequest = makeRequestAction(ACTION_TYPES.PRODUCT_CREATE_REQUEST, "data");
const productCreateError = makeErrorAction(ACTION_TYPES.PRODUCT_CREATE_ERROR, "error");

const productCreateResponse = (response) => {
  const normalized = normalize(response, arrayOf(productSchema));
  return {
    type:  ACTION_TYPES.PRODUCT_CREATE_RESPONSE,
    data: normalized.entities.products
  };
};

const createProduct = (data) => {
  return dispatch => {
    dispatch(productCreateRequest(data));
    return create(entityName, data)
    .then(() => fetchAll(entityName))
    .then(response => dispatch(productCreateResponse(response)))
    .catch(error => dispatch(productCreateError(error)))
  };
};

const productDestroyRequest = makeRequestAction(ACTION_TYPES.PRODUCT_DESTROY_REQUEST, "id");
const productDestroyError = makeErrorAction(ACTION_TYPES.PRODUCT_DESTROY_ERROR, "error");

const productDestroyResponse = (response) => {
  const normalized = normalize(response, arrayOf(productSchema));
  return {
    type:  ACTION_TYPES.PRODUCT_DESTROY_RESPONSE,
    data: normalized.entities.products
  };
};

const destroyProduct = (id) => {
  return dispatch => {
    dispatch(productDestroyRequest(id));
    return destroy(entityName, id)
    .then(() => fetchAll(entityName))
    .then(response => dispatch(productDestroyResponse(response)))
    .catch(error => dispatch(productDestroyError(error)))
  };
};

const productFetchRequest = makeRequestAction(ACTION_TYPES.PRODUCT_FETCH_REQUEST);
const productFetchError = makeErrorAction(ACTION_TYPES.PRODUCT_FETCH_ERROR, "error");

const productFetchResponse = (response) => {
  const normalized = normalize(response, arrayOf(productSchema));
  return {
    type:  ACTION_TYPES.PRODUCT_FETCH_RESPONSE,
    data: normalized.entities.products
  };
};

const getProducts = () => {
  return dispatch => {
    dispatch(productFetchRequest());
    return fetchAll(entityName)
      .then(response => dispatch(productFetchResponse(response)))
      .catch(error => dispatch(productFetchError(error)))
  };
};

const productUpdateRequest = makeRequestAction(ACTION_TYPES.PRODUCT_UPDATE_REQUEST, "data");
const productUpdateError = makeErrorAction(ACTION_TYPES.PRODUCT_UPDATE_ERROR, "error");

const productUpdateResponse = (response) => {
  const normalized = normalize(response, arrayOf(productSchema));
  return {
    type:  ACTION_TYPES.PRODUCT_UPDATE_RESPONSE,
    data: normalized.entities.products
  };
};

const updateProduct = (data) => {
  return dispatch => {
    dispatch(productUpdateRequest(data));
    return update(entityName, data)
      .then(() => fetchAll(entityName))
      .then(response => dispatch(productUpdateResponse(response)))
      .catch(error => dispatch(productUpdateError(error)))
  };
};

export {
  createProduct,
  destroyProduct,
  getProducts,
  updateProduct
};
