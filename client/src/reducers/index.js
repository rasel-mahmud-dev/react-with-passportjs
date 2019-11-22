import { combineReducers } from "redux";

import {
  SIGN_IN_WITH_GOOGLE,
  SIGN_OUT_WITH_GOOGLE,
  FETCH_CURRENT_USER
} from "../actions/types";

// Auth Reducers.................
const initialAuthState = {
  isAuthenticated: false
};
const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case SIGN_IN_WITH_GOOGLE:
      return state;

    case SIGN_OUT_WITH_GOOGLE:
      return {...state, ...action.payload};

    case FETCH_CURRENT_USER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer
});
