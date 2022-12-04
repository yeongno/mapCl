import { TURNFORUM, TURNMAP, TURNMENU, TURNTEST } from "../_actions/types";

export default function turn(state = {}, action) {
  switch (action.type) {
    case TURNMAP:
      return { ...state, turnMap: action.value };
    case TURNMENU:
      return { ...state, turnMenu: action.value };
    case TURNFORUM:
      return { ...state, turnForum: action.value };
    case TURNTEST:
      return { ...state, turnTest: action.value };
    default:
      return state;
  }
}
