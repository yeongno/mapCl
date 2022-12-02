import { LOCATION_MAP, ONLOCATION_MAP } from "../../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case LOCATION_MAP:
      return { ...state, location: action.payload };
    case ONLOCATION_MAP:
      return { ...state, onlocation: action.payload };
    default:
      return state;
  }
}
