"use strict";
import * as  ActionTypes from "../constants/action_types";

const initialState = {
  products: {}
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case  ActionTypes.CART_ADD_PRODUCT:
      return {
        ...state,
        // Add single product to products
        product: action.data
      };

    case  ActionTypes.CART_REMOVE_PRODUCT:
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
