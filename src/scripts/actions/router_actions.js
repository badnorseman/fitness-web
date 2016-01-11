"use strict";
import * as  ACTION_TYPES from "../constants/action_types";
import { getClients } from "./client_actions";
import { getTransactions } from "./transaction_actions";

const changeRoute = (route, param) => {
  return dispatch => {
    switch (route) {
      case "ACCOUNT":
        dispatch(getTransactions());
        break;
      case "DASHBOARD":
        console.log("get data to Dashboard");
        break;
      default:
    }

    dispatch({
      type:  ACTION_TYPES.ROUTE_CHANGE,
      route: route,
      param: param
    });
  };
};

export { changeRoute };
