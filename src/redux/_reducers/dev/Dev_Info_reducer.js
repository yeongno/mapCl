import { FAVORITE_DEV } from "../../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case FAVORITE_DEV:
      return { ...state, favorite: action.payload };
    default:
      return state;
  }
}
