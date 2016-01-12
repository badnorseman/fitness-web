"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { arrayOf, normalize, Schema } from "normalizr";
import { fetchAll } from "../api/api";
import { makeAction } from "../utils/make_action";

const customerSchema = new Schema("customers", { idAttribute: "id" });
const entityName = "customer";

const customerFetchRequest = makeAction(ACTION_TYPES.CUSTOMER_FETCH_REQUEST);
const customerFetchSuccess = makeAction(ACTION_TYPES.CUSTOMER_FETCH_SUCCESS, "data");
const customerFetchError = makeAction(ACTION_TYPES.CUSTOMER_FETCH_ERROR, "errors");

const getCustomers = () => {
  return dispatch => {
    dispatch(customerFetchRequest());
    return fetchAll(entityName)
      .then(success => {
        const normalized = normalize(success, arrayOf(customerSchema));
        dispatch(customerFetchSuccess(normalized.entities.customers))})
      .catch(error => {
        const errors = JSON.parse(error.responseText).errors;
        dispatch(customerFetchError(errors))})
  };
};

export {
  getCustomers
};
