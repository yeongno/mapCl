import { TURNMAP } from "./types";

/**
 * 지도 바꾸기 DEFAULT_MAP, REL_MAP
 * @param {string "DEFAULT_MAP"} dataToSubmit 
 * @returns 
 */
export function turnMap(dataToSubmit) {
  return {
    type: TURNMAP,
    value: dataToSubmit,
  };
}