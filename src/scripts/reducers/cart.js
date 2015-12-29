"use strict";
import * as types from "../constants/action_types";

const initialState = {
  products: {}
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.CART_ADD_PRODUCT:
      return {
        ...state,
        // Add single product to products
        product: action.data
      };

    case types.CART_REMOVE_PRODUCT:
      return {
        ...state,
        // Remove single product from products
        id: action.id
      };

    default:
      return state;
  }
};

export default cart
