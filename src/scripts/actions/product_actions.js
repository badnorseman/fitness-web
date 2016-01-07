"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { Schema, arrayOf, normalize } from "normalizr";
import { create, destroy, fetchAll, update } from "../api/api";
import { makeErrorAction } from "../utils/make_actions";

const productSchema = new Schema("products", { idAttribute: "id" });
const entityName = "product";

const productCreateError = makeErrorAction(ACTION_TYPES.PRODUCT_CREATE_ERROR, "error");

const productCreateRequest = (data) => {
  return {
    type:  ACTION_TYPES.PRODUCT_CREATE_REQUEST,
    data: data
  };
};

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

const productDestroyRequest = (id) => {
  return {
    type:  ACTION_TYPES.PRODUCT_DESTROY_REQUEST,
    id: id
  };
};

const productDestroyResponse = (response) => {
  const normalized = normalize(response, arrayOf(productSchema));
  return {
    type:  ACTION_TYPES.PRODUCT_DESTROY_RESPONSE,
    data: normalized.entities.products
  };
};

const productDestroyError = makeErrorAction(ACTION_TYPES.PRODUCT_DESTROY_ERROR, "error");

const destroyProduct = (id) => {
  return dispatch => {
    dispatch(productDestroyRequest(id));
    return destroy(entityName, id)
    .then(() => fetchAll(entityName))
    .then(response => dispatch(productDestroyResponse(response)))
    .catch(error => dispatch(productDestroyError(error)))
  };
};

const productFetchRequest = () => {
  return {
    type:  ACTION_TYPES.PRODUCT_FETCH_REQUEST
  };
};

const productFetchResponse = (response) => {
  const normalized = normalize(response, arrayOf(productSchema));
  return {
    type:  ACTION_TYPES.PRODUCT_FETCH_RESPONSE,
    data: normalized.entities.products
  };
};

const productFetchError = makeErrorAction(ACTION_TYPES.PRODUCT_FETCH_ERROR, "error");

const getProducts = () => {
  return dispatch => {
    dispatch(productFetchRequest());
    return fetchAll(entityName)
      .then(response => dispatch(productFetchResponse(response)))
      .catch(error => dispatch(productFetchError(error)))
  };
};

const productUpdateRequest = (data) => {
  return {
    type:  ACTION_TYPES.PRODUCT_UPDATE_REQUEST,
    data: data
  };
};

const productUpdateResponse = (response) => {
  const normalized = normalize(response, arrayOf(productSchema));
  return {
    type:  ACTION_TYPES.PRODUCT_UPDATE_RESPONSE,
    data: normalized.entities.products
  };
};

const productUpdateError = makeErrorAction(ACTION_TYPES.PRODUCT_UPDATE_ERROR, "error");

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
