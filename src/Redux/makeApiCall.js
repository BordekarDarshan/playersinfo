import axios from "axios";

export function makeApiCall(
  apiUrl,
  successCall,
  failureCall,
  methodName,
  reqBody,
  reqHeader
) {
  let axiosBody = null;
  if (methodName === "GET") {
    axiosBody = {
      method: methodName,
      url: apiUrl,
      headers: reqHeader,
    };
  } else if (methodName === "POST") {
    axiosBody = {
      method: methodName,
      url: apiUrl,
      data: reqBody,
      headers: reqHeader,
    };
  }
  return (dispatch) =>
    axios(axiosBody)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          dispatch(successCall(response.data));
        } else {
          const error = new Error(response.statusText);
          dispatch(failureCall(error));
          throw error;
        }
      })
      .catch((err) => {
        if (err.response) {
          switch (err.response.status) {
            case 400:
              dispatch(failureCall("Something went Wrong"));
              break;
            case 500:
              dispatch(failureCall("Something went Wrong"));
              break;
            default:
              dispatch(failureCall("Something went Wrong"));
              break;
          }
        } else {
          dispatch(failureCall("Network Error"));
        }
      });
}
