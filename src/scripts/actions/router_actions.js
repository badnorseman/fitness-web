"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { getTransactions } from "./transaction_actions";
import { getUsers } from "./user_actions";

const changeRoute = (route, param) => {
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
      type:  ACTION_TYPES.ROUTE_CHANGE,
      route: route,
      param: param
    });
  };
};

export { changeRoute };
