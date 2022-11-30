import { TURNFORUM, TURNMAP, TURNMENU } from "./types";

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
 * 메뉴 바꾸기 MAIN_MENU, MAP_MENU, GENERALFORUM_MENU, TEST_MAP, INTERESTED_MAP
 * @param {string "DEFAULT_MAP"} dataToSubmit
 * @returns
 */
export function turnMenu(dataToSubmit) {
  return {
    type: TURNMENU,
    value: dataToSubmit,
  };
}

/**
 * 게시판 포럼 바꾸기 GENERAL_FORUM, NOTICE_FORUM, INQUIRY_FORUM
 * @param {string "DEFAULT_MAP"} dataToSubmit
 * @returns
 */
export function turnForum(dataToSubmit) {
  return {
    type: TURNFORUM,
    value: dataToSubmit,
  };
}
