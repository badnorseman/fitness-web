"use strict";
import * as  ActionTypes from "../constants/action_types";
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
      type:  ActionTypes.ROUTE_CHANGE,
      route: route,
      param: param
    });
  };
};

export { changeRoute };
