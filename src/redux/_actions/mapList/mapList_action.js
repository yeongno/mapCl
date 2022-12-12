import { SETMAPLIST_LIST } from "../types";

export function setMapList(data) {
  return {
    type: SETMAPLIST_LIST,
    payload: data,
  };
}
