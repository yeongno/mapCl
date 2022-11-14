import {
  DELETE_TOKEN,
  REPLY_GET,
  REPLY_SET,
  SET_TOKEN,
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.token, authenticated: action.result };
    case DELETE_TOKEN:
      return { ...state, token: action.token, authenticated: action.result };
    default:
      return state;
  }
}
