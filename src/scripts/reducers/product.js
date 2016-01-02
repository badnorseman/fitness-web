"use strict";
import * as  ACTION_TYPES from "../constants/action_types";

const initialState = {
  isFetching: false,
  products: {}
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case  ACTION_TYPES.PRODUCT_CREATE_REQUEST:
    case  ACTION_TYPES.PRODUCT_DESTROY_REQUEST:
    case  ACTION_TYPES.PRODUCT_FETCH_REQUEST:
    case  ACTION_TYPES.PRODUCT_UPDATE_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case  ACTION_TYPES.PRODUCT_CREATE_RESPONSE:
    case  ACTION_TYPES.PRODUCT_DESTROY_RESPONSE:
    case  ACTION_TYPES.PRODUCT_FETCH_RESPONSE:
    case  ACTION_TYPES.PRODUCT_UPDATE_RESPONSE:
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
