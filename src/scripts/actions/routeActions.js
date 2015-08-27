export const ROUTE_CHANGE = "ROUTE_CHANGE";

export function changeRoute(route, id) {
  return dispatch => {
    dispatch({
      type: ROUTE_CHANGE,
      route: route,
      id: id
    });
  };
}
