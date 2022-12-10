import {
  CENTERLOCATION_MAP,
  GEOLOCATION_MAP,
  LOCATION_MAP,
  MAINLOCATION_MAP,
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
    case PRELOCATION_MAP:
      return { ...state, prelocation: action.payload };
    case MAINLOCATION_MAP:
      return { ...state, mainlocation: action.payload };
    case GEOLOCATION_MAP:
      return { ...state, geolocation: action.payload };
    default:
      return state;
  }
}
