import {
  CENTERLOCATION_MAP,
  LOCATION_MAP,
  ONLOCATION_MAP,
  PRELOCATION_MAP,
} from "../../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case LOCATION_MAP:
      return { ...state, location: action.payload };
    case ONLOCATION_MAP:
      return { ...state, onlocation: action.payload };
    case CENTERLOCATION_MAP:
      return { ...state, centerlocation: action.payload };
    default:
      return state;
  }
}
