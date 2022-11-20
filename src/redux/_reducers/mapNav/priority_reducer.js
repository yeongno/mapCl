import { PRIORITY_MAP } from "../../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case PRIORITY_MAP:
      return { ...state, priority: action.payload };
    default:
      return state;
  }
}
