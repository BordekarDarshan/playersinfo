import { makeApiCall } from "../makeApiCall";

export const fetchProfileActions = {
  FETCH_PROFILE_SUCCESS: "FETCH_PROFILE_SUCCESS",
  FETCH_PROFILE_ERROR: "FETCH_PROFILE_ERROR",
};

export function fetchProfileSuccess(props) {
  return (dispatch) => {
    dispatch({
      type: fetchProfileActions.FETCH_PROFILE_SUCCESS,
      payload: props,
    });
  };
}

export function fetchProfileError(error) {
  return {
    type: fetchProfileActions.FETCH_PROFILE_ERROR,
    payload: error,
  };
}

export function fetchProfileThunk() {
  const reqHeader = {
    "Content-Type": "application/json",
  };
  const getUrl = `https://api.jsonbin.io/b/604f1c137ea6546cf3ddf46e`;
  return makeApiCall(
    getUrl,
    fetchProfileSuccess,
    fetchProfileError,
    "GET",
    null,
    reqHeader
  );
}
