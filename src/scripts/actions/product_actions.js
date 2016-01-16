"use strict";
import * as actionTypes from "../constants/action_types";
import { arrayOf, normalize, Schema } from "normalizr";
import { create, destroy, fetchAll, update } from "../api/api";
import { makeAction } from "../utils/make_action";
import { getCoaches } from "./coach_actions";

const productSchema = new Schema("products", { idAttribute: "id" });
const ENTITY = "product";

const productCreateRequest = makeAction(actionTypes.PRODUCT_CREATE_REQUEST, "data");
const productCreateSuccess = makeAction(actionTypes.PRODUCT_CREATE_SUCCESS, "data");
const productCreateError = makeAction(actionTypes.PRODUCT_CREATE_ERROR, "errors");

const createProduct = (data) => {
  return dispatch => {
    dispatch(productCreateRequest(data));
    return create(ENTITY, data)
      .then(success => dispatch(productCreateSuccess(success)))
      .then(() => dispatch(getProducts()))
      .then(() => dispatch(getCoaches()))
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(productCreateError(errors))})
  };
};

const productDestroyRequest = makeAction(actionTypes.PRODUCT_DESTROY_REQUEST, "id");
const productDestroySuccess = makeAction(actionTypes.PRODUCT_DESTROY_SUCCESS);
const productDestroyError = makeAction(actionTypes.PRODUCT_DESTROY_ERROR, "errors");

const destroyProduct = (id) => {
  return dispatch => {
    dispatch(productDestroyRequest(id));
    return destroy(ENTITY, id)
      .then(() => dispatch(productDestroySuccess()))
      .then(() => dispatch(getProducts()))
      .then(() => dispatch(getCoaches()))
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(productDestroyError(errors))})
  };
};

const productFetchRequest = makeAction(actionTypes.PRODUCT_FETCH_REQUEST);
const productFetchSuccess = makeAction(actionTypes.PRODUCT_FETCH_SUCCESS, "data");
const productFetchError = makeAction(actionTypes.PRODUCT_FETCH_ERROR, "errors");

const getProducts = () => {
  return dispatch => {
    dispatch(productFetchRequest());
    return fetchAll(ENTITY)
      .then(success => {
        const normalized = normalize(success, arrayOf(productSchema));
        dispatch(productFetchSuccess(normalized.entities.products))})
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(productFetchError(errors))})
  };
};

const productUpdateRequest = makeAction(actionTypes.PRODUCT_UPDATE_REQUEST, "data");
const productUpdateSuccess = makeAction(actionTypes.PRODUCT_UPDATE_SUCCESS, "data");
const productUpdateError = makeAction(actionTypes.PRODUCT_UPDATE_ERROR, "errors");

const updateProduct = (data) => {
  return dispatch => {
    dispatch(productUpdateRequest(data));
    return update(ENTITY, data)
      .then(success => dispatch(productUpdateSuccess(success)))
      .then(() => dispatch(getProducts()))
      .then(() => dispatch(getCoaches()))
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(productUpdateError(errors))})
  };
};

export { createProduct, destroyProduct, getProducts, updateProduct };
