"use strict";
import * as  actionTypes from "../constants/action_types";
import { getTransactions } from "./transaction_actions";
import { getUsers } from "./user_actions";

const goTo = (route, param) => {
  return dispatch => {
    switch (route) {
      case "ACCOUNT":
        dispatch(getTransactions());
        break;
      case "DASHBOARD":
        dispatch(getUsers());
        break;
    }

    dispatch({
      type:  actionTypes.ROUTE_CHANGE,
      route: route,
      param: param
    });
  };
};

export { goTo };
