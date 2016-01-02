"use strict";
import * as  ACTION_TYPES from "../constants/action_types";

export function cartAddProduct(product) {
  return {
    type:  ACTION_TYPES.CART_ADD_PRODUCT,
    data: product
  };
}

export function cartRemoveProduct(id) {
  return {
    type:  ACTION_TYPES.CART_REMOVE_PRODUCT,
    id: id
  };
}
