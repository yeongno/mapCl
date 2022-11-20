import { LOCATION_MAP } from "../types";

export function setLocation(lat, lng) {
  return {
    type: LOCATION_MAP,
    payload: { lat, lng },
  };
}
