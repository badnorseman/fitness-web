"use strict";
export const CART_ADD_PRODUCT = "CART_ADD_PRODUCT";

export function cartAddProduct(product) {
  return {
    type: CART_ADD_PRODUCT,
    data: product
  };
}

export const CART_REMOVE_PRODUCT = "CART_REMOVE_PRODUCT";

export function cartRemoveProduct(id) {
  return {
    type: CART_REMOVE_PRODUCT,
    id: id
  };
}
