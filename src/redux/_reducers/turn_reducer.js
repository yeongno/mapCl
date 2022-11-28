import { TURNFORUM, TURNMAP, TURNMENU } from "../_actions/types";

export default function turn(state = {}, action) {
  switch (action.type) {
    case TURNMAP:
      return { ...state, turnMap: action.value };
    case TURNMENU:
      return { ...state, turnMenu: action.value };
    case TURNFORUM:
      return { ...state, turnForum: action.value };

    default:
      return state;
  }
}
