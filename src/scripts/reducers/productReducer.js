"use strict";
import {
  PRODUCT_ERROR_RESET,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_RESPONSE,
  PRODUCT_CREATE_ERROR,
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_RESPONSE,
  PRODUCT_FETCH_ERROR,
  PRODUCT_DESTROY_REQUEST,
  PRODUCT_DESTROY_RESPONSE,
  PRODUCT_DESTROY_ERROR,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_RESPONSE,
  PRODUCT_UPDATE_ERROR
} from "../actions/productActions";

const initialState = {
  errors: [],
  isFetching: false,
  products: {}
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_ERROR_RESET:
      return Object.assign({}, state, {
        errors: [],
        isFetching: false
      });

    case PRODUCT_CREATE_REQUEST:
    case PRODUCT_DESTROY_REQUEST:
    case PRODUCT_FETCH_REQUEST:
    case PRODUCT_UPDATE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });

    case PRODUCT_CREATE_RESPONSE:
    case PRODUCT_DESTROY_RESPONSE:
    case PRODUCT_FETCH_RESPONSE:
    case PRODUCT_UPDATE_RESPONSE:
      return Object.assign({}, state, {
        errors: [],
        isFetching: false,
        products: action.data
      });

    case PRODUCT_CREATE_ERROR:
    case PRODUCT_FETCH_ERROR:
    case PRODUCT_DESTROY_ERROR:
    case PRODUCT_UPDATE_ERROR:
      return Object.assign({}, state, {
        errors: action.errors,
        isFetching: false
      });

    default:
      return state;
  }
}
