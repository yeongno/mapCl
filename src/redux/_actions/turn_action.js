import {
  TURNFORUM,
  TURNMAP,
  TURNMAPCOVER,
  TURNMENU,
  TURNMO,
  TURNMRFILTER,
  TURNTEST,
  TURN_INFOWINDOW,
  TURN_MAPACT,
  TURN_TOPICCTR,
} from "./types";

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
 * 메뉴 바꾸기 MAIN_MENU, MAP_MENU, COMMUNITY_MENU, TEST_MAP, INTERESTED_MAP
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
 * 메뉴 바꾸기 FAVORITEMR_FILTER, POSTMR_FILTER, ADMR_FILTER
 * @param {string "FAVORITEMR_FILTER"} dataToSubmit
 * @returns
 */
export function turn_mrFilter(dataToSubmit) {
  return {
    type: TURNMRFILTER,
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
/**
 * leftSection 옵션 바꾸기 MINE_MO, NEAR_MO, OTHER_MO
 * @param {string "DEFAULT_MAP"} dataToSubmit
 * @returns
 */
export function turnMO(dataToSubmit) {
  return {
    type: TURNMO,
    value: dataToSubmit,
  };
}

/**
 * map의 커버를 OnOff
 * @param {boolean true} dataToSubmit
 * @returns
 */
export function turnMapCover(dataToSubmit) {
  return {
    type: TURNMAPCOVER,
    value: dataToSubmit,
  };
}
/**
 * Test 메뉴 바꾸기
 * @param {string "DEFAULT_MAP"} dataToSubmit
 * @returns
 */
export function turnTest(dataToSubmit) {
  return {
    type: TURNTEST,
    value: dataToSubmit,
  };
}

/**
 * infoWindow가 열려 있을 경우 다른 활동으로 영향을 주지 못하게 해주는 플래그 값
 * @param {boolean true} dataToSubmit
 * @returns
 */
export function turnInfoWindow(dataToSubmit) {
  return {
    type: TURN_INFOWINDOW,
    value: dataToSubmit,
  };
}

/**
 * topicCtr의 topic 전환 플래그
 * true면 AdPosts, false면 general
 * @param {boolean true} dataToSubmit
 * @returns
 */
export function turnTopicCtr(dataToSubmit) {
  return {
    type: TURN_TOPICCTR,
    value: dataToSubmit,
  };
}

/**
 * MapPage의 RightSection에서 MapPage 창의 비/활성화 플래그
 * @param {boolean true} dataToSubmit
 * @returns
 */
export function turnMapAct(dataToSubmit) {
  return {
    type: TURN_MAPACT,
    value: dataToSubmit,
  };
}