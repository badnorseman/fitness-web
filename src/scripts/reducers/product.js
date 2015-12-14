"use strict";
import {
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_RESPONSE,
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_RESPONSE,
  PRODUCT_DESTROY_REQUEST,
  PRODUCT_DESTROY_RESPONSE,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_RESPONSE
} from "../actions/product_actions";

const initialState = {
  isFetching: false,
  products: {}
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
    case PRODUCT_DESTROY_REQUEST:
    case PRODUCT_FETCH_REQUEST:
    case PRODUCT_UPDATE_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case PRODUCT_CREATE_RESPONSE:
    case PRODUCT_DESTROY_RESPONSE:
    case PRODUCT_FETCH_RESPONSE:
    case PRODUCT_UPDATE_RESPONSE:
      return {
        ...state,
        isFetching: false,
        products: action.data
      };

    default:
      return state;
  }
};

export default product
