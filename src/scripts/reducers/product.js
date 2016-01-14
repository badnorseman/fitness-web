"use strict";
import * as  ActionTypes from "../constants/action_types";

const initialState = {
  isFetching: false,
  products: {}
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case  ActionTypes.PRODUCT_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case  ActionTypes.PRODUCT_FETCH_SUCCESS:
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
