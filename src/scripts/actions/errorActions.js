export const RESET_ERROR_MESSAGE = "RESET_ERROR_MESSAGE";

export function resetErrorMessage() {
  return dispatch => {
    dispatch({
      type: RESET_ERROR_MESSAGE
    });
  };
}
