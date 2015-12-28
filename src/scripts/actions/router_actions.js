"use strict";
import * as types from "../constants/action_types";

export function changeRoute(route, param) {
  return dispatch => {
    dispatch({
      type: types.ROUTE_CHANGE,
      route: route,
      param: param
    });
  };
}
