import { TURNMAP, TURNMENU } from "./types";

/**
 * 지도 바꾸기 DEFAULT_MAP, REL_MAP, NEAR_MAP, TEST_MAP, INTERESTED_MAP
 * @param {string "DEFAULT_MAP"} dataToSubmit
 * @returns
 */
export function turnMap(dataToSubmit) {
  return {
    type: TURNMAP,
    value: dataToSubmit,
  };
}

/**
 * 지도 바꾸기 DEFAULT_MAP, REL_MAP, NEAR_MAP, TEST_MAP, INTERESTED_MAP
 * @param {string "DEFAULT_MAP"} dataToSubmit
 * @returns
 */
export function turnMenu(dataToSubmit) {
  return {
    type: TURNMENU,
    value: dataToSubmit,
  };
}
