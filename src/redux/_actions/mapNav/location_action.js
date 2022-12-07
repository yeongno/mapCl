import {
  CENTERLOCATION_MAP,
  LOCATION_MAP,
  ONLOCATION_MAP,
  PRELOCATION_MAP,
} from "../types";

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
export function setPreLocation(data) {
  return {
    type: PRELOCATION_MAP,
    payload: data,
  };
}
export function setCenterLocation(data) {
  return {
    type: CENTERLOCATION_MAP,
    payload: data,
  };
}
