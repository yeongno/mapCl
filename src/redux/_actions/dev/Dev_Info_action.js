import { FAVORITE_DEV } from "../types";

export function dev_favorite(nickName, priorityNumber) {
  return {
    type: FAVORITE_DEV,
    payload: { nickName, priorityNumber },
  };
}
