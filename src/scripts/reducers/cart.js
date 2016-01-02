"use strict";
import * as  ACTION_TYPES from "../constants/action_types";

const initialState = {
  products: {}
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case  ACTION_TYPES.CART_ADD_PRODUCT:
      return {
        ...state,
        // Add single product to products
        product: action.data
      };

    case  ACTION_TYPES.CART_REMOVE_PRODUCT:
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
