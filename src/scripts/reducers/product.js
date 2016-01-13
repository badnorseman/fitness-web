"use strict";
import * as  ACTION_TYPES from "../constants/action_types";

const initialState = {
  isFetching: false,
  products: {}
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case  ACTION_TYPES.PRODUCT_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case  ACTION_TYPES.PRODUCT_FETCH_SUCCESS:
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
