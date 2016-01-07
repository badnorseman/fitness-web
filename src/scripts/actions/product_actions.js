"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { arrayOf, normalize, Schema } from "normalizr";
import { create, destroy, fetchAll, update } from "../api/api";
import { makeAction, makeErrorAction } from "../utils/make_actions";

const productSchema = new Schema("products", { idAttribute: "id" });
const entityName = "product";

const productCreateRequest = makeAction(ACTION_TYPES.PRODUCT_CREATE_REQUEST, "data");
const productCreateResponse = makeAction(ACTION_TYPES.PRODUCT_CREATE_RESPONSE, "data");
const productCreateError = makeErrorAction(ACTION_TYPES.PRODUCT_CREATE_ERROR, "error");

const createProduct = (data) => {
  return dispatch => {
    dispatch(productCreateRequest(data));
    return create(entityName, data)
      .then(() => fetchAll(entityName))
      .then(response => {
        const normalized = normalize(response, arrayOf(productSchema));
        dispatch(productCreateResponse(normalized.entities.products))})
      .catch(error => dispatch(productCreateError(error)))
  };
};

const productDestroyRequest = makeAction(ACTION_TYPES.PRODUCT_DESTROY_REQUEST, "id");
const productDestroyResponse = makeAction(ACTION_TYPES.PRODUCT_DESTROY_RESPONSE, "data");
const productDestroyError = makeErrorAction(ACTION_TYPES.PRODUCT_DESTROY_ERROR, "error");

const destroyProduct = (id) => {
  return dispatch => {
    dispatch(productDestroyRequest(id));
    return destroy(entityName, id)
      .then(() => fetchAll(entityName))
      .then(response => {
        const normalized = normalize(response, arrayOf(productSchema));
        dispatch(productDestroyResponse(normalized.entities.products))})
      .catch(error => dispatch(productDestroyError(error)))
  };
};

const productFetchRequest = makeAction(ACTION_TYPES.PRODUCT_FETCH_REQUEST);
const productFetchResponse = makeAction(ACTION_TYPES.PRODUCT_FETCH_RESPONSE, "data");
const productFetchError = makeErrorAction(ACTION_TYPES.PRODUCT_FETCH_ERROR, "error");

const getProducts = () => {
  return dispatch => {
    dispatch(productFetchRequest());
    return fetchAll(entityName)
      .then(response => {
        const normalized = normalize(response, arrayOf(productSchema));
        dispatch(productFetchResponse(normalized.entities.products))})
      .catch(error => dispatch(productFetchError(error)))
  };
};

const productUpdateRequest = makeAction(ACTION_TYPES.PRODUCT_UPDATE_REQUEST, "data");
const productUpdateResponse = makeAction(ACTION_TYPES.PRODUCT_UPDATE_RESPONSE, "data");
const productUpdateError = makeErrorAction(ACTION_TYPES.PRODUCT_UPDATE_ERROR, "error");

const updateProduct = (data) => {
  return dispatch => {
    dispatch(productUpdateRequest(data));
    return update(entityName, data)
      .then(() => fetchAll(entityName))
      .then(response => {
        const normalized = normalize(response, arrayOf(productSchema));
        dispatch(productUpdateResponse(normalized.entities.products))})
      .catch(error => dispatch(productUpdateError(error)))
  };
};

export {
  createProduct,
  destroyProduct,
  getProducts,
  updateProduct
};
