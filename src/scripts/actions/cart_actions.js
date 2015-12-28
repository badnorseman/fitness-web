"use strict";
import * as types from "../constants/action_types";

export function cartAddProduct(product) {
  return {
    type: types.CART_ADD_PRODUCT,
    data: product
  };
}

export function cartRemoveProduct(id) {
  return {
    type: types.CART_REMOVE_PRODUCT,
    id: id
  };
}
