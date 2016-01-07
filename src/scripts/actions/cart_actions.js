"use strict";
import * as  ACTION_TYPES from "../constants/action_types";

const cartAddProduct = (product) => {
  return {
    type:  ACTION_TYPES.CART_ADD_PRODUCT,
    data: product
  };
};

const cartRemoveProduct = (id) => {
  return {
    type:  ACTION_TYPES.CART_REMOVE_PRODUCT,
    id: id
  };
};

export {
  cartAddProduct,
  cartRemoveProduct
};
