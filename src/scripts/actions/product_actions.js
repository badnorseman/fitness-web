"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { arrayOf, normalize, Schema } from "normalizr";
import { create, destroy, fetchAll, update } from "../api/api";
import { makeAction } from "../utils/make_action";

const productSchema = new Schema("products", { idAttribute: "id" });
const entityName = "product";

const productCreateRequest = makeAction(ACTION_TYPES.PRODUCT_CREATE_REQUEST, "data");
const productCreateResponse = makeAction(ACTION_TYPES.PRODUCT_CREATE_RESPONSE, "data");
const productCreateError = makeAction(ACTION_TYPES.PRODUCT_CREATE_ERROR, "errors");

const createProduct = (data) => {
  return dispatch => {
    dispatch(productCreateRequest(data));
    return create(entityName, data)
      .then(() => fetchAll(entityName))
      .then(success => {
        const normalized = normalize(success, arrayOf(productSchema));
        dispatch(productCreateResponse(normalized.entities.products))})
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(productCreateError(errors))})
  };
};

const productDestroyRequest = makeAction(ACTION_TYPES.PRODUCT_DESTROY_REQUEST, "id");
const productDestroyResponse = makeAction(ACTION_TYPES.PRODUCT_DESTROY_RESPONSE, "data");
const productDestroyError = makeAction(ACTION_TYPES.PRODUCT_DESTROY_ERROR, "errors");

const destroyProduct = (id) => {
  return dispatch => {
    dispatch(productDestroyRequest(id));
    return destroy(entityName, id)
      .then(() => fetchAll(entityName))
      .then(success => {
        const normalized = normalize(success, arrayOf(productSchema));
        dispatch(productDestroyResponse(normalized.entities.products))})
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(productDestroyError(errors))})
  };
};

const productFetchRequest = makeAction(ACTION_TYPES.PRODUCT_FETCH_REQUEST);
const productFetchResponse = makeAction(ACTION_TYPES.PRODUCT_FETCH_RESPONSE, "data");
const productFetchError = makeAction(ACTION_TYPES.PRODUCT_FETCH_ERROR, "errors");

const getProducts = () => {
  return dispatch => {
    dispatch(productFetchRequest());
    return fetchAll(entityName)
      .then(success => {
        const normalized = normalize(success, arrayOf(productSchema));
        dispatch(productFetchResponse(normalized.entities.products))})
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(productFetchError(errors))})
  };
};

const productUpdateRequest = makeAction(ACTION_TYPES.PRODUCT_UPDATE_REQUEST, "data");
const productUpdateResponse = makeAction(ACTION_TYPES.PRODUCT_UPDATE_RESPONSE, "data");
const productUpdateError = makeAction(ACTION_TYPES.PRODUCT_UPDATE_ERROR, "errors");

const updateProduct = (data) => {
  return dispatch => {
    dispatch(productUpdateRequest(data));
    return update(entityName, data)
      .then(() => fetchAll(entityName))
      .then(success => {
        const normalized = normalize(success, arrayOf(productSchema));
        dispatch(productUpdateResponse(normalized.entities.products))})
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(productUpdateError(errors))})
  };
};

export {
  createProduct,
  destroyProduct,
  getProducts,
  updateProduct
};
