import {
  TURNFORUM,
  TURNMAP,
  TURNMAPCOVER,
  TURNMENU,
  TURNMO,
  TURNMRFILTER,
  TURNTEST,
  TURN_INFOWINDOW,
} from "../_actions/types";

export default function turn(state = {}, action) {
  switch (action.type) {
    case TURNMAP:
      return { ...state, turnMap: action.value };
    case TURNMENU:
      return { ...state, turnMenu: action.value };
    case TURNMRFILTER:
      return { ...state, turnMrFilter: action.value };
    case TURNFORUM:
      return { ...state, turnForum: action.value };
    case TURNTEST:
      return { ...state, turnTest: action.value };
    case TURNMO:
      return { ...state, turnMo: action.value };
    case TURNMAPCOVER:
      return { ...state, turnMapCover: action.value };
    case TURN_INFOWINDOW:
      return { ...state, turnInfoWindow: action.value };
    default:
      return state;
  }
}
