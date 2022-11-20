import { LOCATION_MAP } from "../../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case LOCATION_MAP:
      return { ...state, location: action.payload };
    default:
      return state;
  }
}
