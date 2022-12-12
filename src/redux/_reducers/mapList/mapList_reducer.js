import { SETMAPLIST_LIST } from "../../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case SETMAPLIST_LIST:
      return { ...state, mapList: action.payload };

    default:
      return state;
  }
}
