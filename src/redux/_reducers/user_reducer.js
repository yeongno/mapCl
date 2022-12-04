import {
  AUTH_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "../_actions/types";
//s

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        userInfo: action.payload.user,
        accessToken: action.payload.accessToken,
      };
      break;
    case REGISTER_USER:
      return { ...state, register: action.payload };
      break;
    case AUTH_USER:
      return {
        ...state,
        userData: action.payload,
        isAuth: action.isAuth,
        expireToken: action.expireToken,
      };
      break;
    case LOGOUT_USER:
      return {
        ...state,
        userData: action.payload,
        isAdmin: action.payload.isAdmin,
        isAuth: action.payload.isAuth,
      };
      break;

    default:
      return state;
  }
}
