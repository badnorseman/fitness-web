"use strict";
import * as  ACTION_TYPES from "../constants/action_types";

const changeRoute = (route, param) => {
  return dispatch => {
    dispatch({
      type:  ACTION_TYPES.ROUTE_CHANGE,
      route: route,
      param: param
    });
  };
};

export { changeRoute };
