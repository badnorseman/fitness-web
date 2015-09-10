export const ERROR_RESET = "ERROR_RESET";

export function resetError() {
  return dispatch => {
    dispatch({
      type: ERROR_RESET
    });
  };
}
