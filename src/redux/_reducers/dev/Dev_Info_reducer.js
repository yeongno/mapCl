import { FAVORITE_DEV, GROUP_DEV, POST_DEV } from "../../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case FAVORITE_DEV:
      return { ...state, favorite: action.payload };
    case POST_DEV:
      return { ...state, post: action.payload };
    case GROUP_DEV:
      return { ...state, group: action.payload };
    default:
      return state;
  }
}
