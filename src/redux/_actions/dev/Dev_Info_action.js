import { FAVORITE_DEV, GROUP_DEV, POST_DEV } from "../types";

export function dev_favorite(nickName, priorityNumber) {
  return {
    type: FAVORITE_DEV,
    payload: { nickName, priorityNumber },
  };
}

export function dev_Post(title, content) {
  return {
    type: POST_DEV,
    payload: { title, content },
  };
}

export function dev_Group(topic, title, content) {
  return {
    type: GROUP_DEV,
    payload: { topic, title, content },
  };
}
