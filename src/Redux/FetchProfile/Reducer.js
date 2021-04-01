import { fetchProfileActions } from "./Action";

let initial_state = {
  profile: null,
  error: null,
};

export const playerReducer = (state = initial_state, action) => {
  switch (action.type) {
    case fetchProfileActions.FETCH_PROFILE_SUCCESS:
      return {
        profile: action.payload,
        error: null,
      };
    case fetchProfileActions.FETCH_PROFILE_ERROR:
      return {
        profile: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
