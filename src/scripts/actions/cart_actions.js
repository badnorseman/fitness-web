"use strict";
import * as  actionTypes from "../constants/action_types";

const cartAddProduct = (product) => {
  return {
    type:  actionTypes.CART_ADD_PRODUCT,
    data: product
  };
};

const cartRemoveProduct = (id) => {
  return {
    type:  actionTypes.CART_REMOVE_PRODUCT,
    id: id
  };
};

export { cartAddProduct, cartRemoveProduct };
