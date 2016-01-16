"use strict";
import * as actionTypes from "../constants/action_types";

const initialState = {
  isFetching: false,
  products: {}
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case actionTypes.PRODUCT_FETCH_SUCCESS:
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
