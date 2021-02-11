import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: localStorage.getItem("uid"),
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      localStorage.setItem("uid", action.payload);
      return {
        ...state,
        currentUser: localStorage.getItem("uid"),
      };
    default:
      return state;
  }
};

export default userReducer;
