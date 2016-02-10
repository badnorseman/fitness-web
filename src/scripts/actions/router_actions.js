"use strict";
import * as actionTypes from "../constants/action_types";
import { getTransactions } from "./transaction_actions";
import { getUsers } from "./user_actions";

const goTo = (route, param) => {
  return dispatch => {
    switch (route) {
      case "TRANSACTIONLIST":
        dispatch(getTransactions());
        break;
      case "USERLIST":
        dispatch(getUsers());
        break;
    }

    dispatch({
      type: actionTypes.GOTO,
      route: route,
      param: param
    });
  };
};

export { goTo };
