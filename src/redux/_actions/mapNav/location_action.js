import { LOCATION_MAP, ONLOCATION_MAP } from "../types";

export function setLocation(lat, lng) {
  return {
    type: LOCATION_MAP,
    payload: { lat, lng },
  };
}

export function onLocation(lat, lng) {
  return {
    type: ONLOCATION_MAP,
    payload: { lat, lng },
  };
}
