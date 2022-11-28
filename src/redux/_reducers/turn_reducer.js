import {
  TURNMAP,
  TURNMENU,
  TURNOFF_MENUBAR,
  TURNOFF_SEARCH,
} from "../_actions/types";

export default function turn(state = {}, action) {
  switch (action.type) {
    case TURNMAP:
      return { ...state, turnMap: action.value };
    case TURNMENU:
      return { ...state, turnMenu: action.value };

    default:
      return state;
  }
}
