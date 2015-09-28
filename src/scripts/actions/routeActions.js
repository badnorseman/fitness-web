"use strict";
export const ROUTE_CHANGE = "ROUTE_CHANGE";

export function changeRoute(route, param) {
  return dispatch => {
    dispatch({
      type: ROUTE_CHANGE,
      route: route,
      param: param
    });
  };
}
