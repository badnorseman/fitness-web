"use strict";
import {
  CART_ADD_PRODUCT,
  CART_REMOVE_PRODUCT
} from '../actions/cartActions';

const initialState = {
  products: {}
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_ADD_PRODUCT:
      return Object.assign({}, state, {
        // Add single product to products
        product: action.data
      });

    case CART_REMOVE_PRODUCT:
      return Object.assign({}, state, {
        // Remove single product from products
        id: action.id
      });

    default:
      return state;
  }
}
