"use strict";
import * as types from "../constants/action_types";

const initialState = {
  isFetching: false,
  products: {}
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCT_CREATE_REQUEST:
    case types.PRODUCT_DESTROY_REQUEST:
    case types.PRODUCT_FETCH_REQUEST:
    case types.PRODUCT_UPDATE_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case types.PRODUCT_CREATE_RESPONSE:
    case types.PRODUCT_DESTROY_RESPONSE:
    case types.PRODUCT_FETCH_RESPONSE:
    case types.PRODUCT_UPDATE_RESPONSE:
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
