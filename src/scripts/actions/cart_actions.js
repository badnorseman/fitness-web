"use strict";
import * as  ActionTypes from "../constants/action_types";

const cartAddProduct = (product) => {
  return {
    type:  ActionTypes.CART_ADD_PRODUCT,
    data: product
  };
};

const cartRemoveProduct = (id) => {
  return {
    type:  ActionTypes.CART_REMOVE_PRODUCT,
    id: id
  };
};

export {
  cartAddProduct,
  cartRemoveProduct
};
