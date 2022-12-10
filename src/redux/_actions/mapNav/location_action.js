import {
  CENTERLOCATION_MAP,
  GEOLOCATION_MAP,
  LOCATION_MAP,
  MAINLOCATION_MAP,
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
export function setMainLocation(data) {
  return {
    type: MAINLOCATION_MAP,
    payload: data,
  };
}

export function setGeoLocation(data) {
  return {
    type: GEOLOCATION_MAP,
    payload: data,
  };
}
