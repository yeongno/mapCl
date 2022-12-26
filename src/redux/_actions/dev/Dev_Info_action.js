import { FAVORITE_DEV, GROUP_DEV, POST_DEV } from "../types";

export function dev_favorite(nickName, priorityNumber) {
  return {
    type: FAVORITE_DEV,
    payload: { nickName, priorityNumber },
  };
}

export function dev_Post(content, title, topic, location) {
  return {
    type: POST_DEV,
    payload: { title, content, topic, location },
  };
}

export function dev_Group(
  topic,
  title,
  content,
  place,
  pickDate,
  pickRange,
  location
) {
  return {
    type: GROUP_DEV,
    payload: { topic, title, content, place, pickDate, pickRange, location },
  };
}
