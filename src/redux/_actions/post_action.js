import axios from "axios";
import {
  GET_ADLIST,
  GET_INQUIRYPOSTS,
  GET_NOTICEPOSTS,
  GET_POSTS,
} from "../../config/clientConfig";
import {
  ADLIST_GET,
  POSTINQUIRY_GET,
  POSTNOTICE_GET,
  POST_GET,
  POST_GO,
  POST_ONEGET,
} from "./types";

export function postGo(dataToSubmit1) {
  const request = axios
    .post("/api/posts/post", dataToSubmit1)
    .then((response) => response.data);

  return {
    type: POST_GO,
    payload: request,
  };
}

/**
 * 해당하는 토픽으로 글 목록을 가져온다.
 * @param {topic:"string"}
 * @returns posts
 */
export function getPost() {
  // const request = axios
  //   .post("/api/posts/getPost", dataToSubmit1)
  //   .then((response) => response.data);

  // const request = axios.get("/dummy/Post.json").then((res) => res.data);
  const request = axios.get(GET_POSTS).then((response) => response.data);
  return {
    type: POST_GET,
    payload: request,
  };
}
export function getNotice(dataToSubmit1) {
  // const request = axios
  //   .post("/api/posts/getPost", dataToSubmit1)
  //   .then((response) => response.data);
  const request = axios.get(GET_NOTICEPOSTS).then((response) => response.data);
  return {
    type: POSTNOTICE_GET,
    payload: request,
  };
}
export function getInquiry(dataToSubmit1) {
  // const request = axios
  //   .post("/api/posts/getPost", dataToSubmit1)
  //   .then((response) => response.data);
  const request = axios.get(GET_INQUIRYPOSTS).then((response) => response.data);
  return {
    type: POSTINQUIRY_GET,
    payload: request,
  };
}

export function getAdList(dataToSubmit1) {
  // const request = axios
  //   .post("/api/posts/getPost", dataToSubmit1)
  //   .then((response) => response.data);
  const request = axios.get(GET_ADLIST).then((response) => response.data);
  return {
    type: ADLIST_GET,
    payload: request,
  };
}

/**
 * postId로 해당 게시물을 가져온다.
 * @param {_id:postFrom} dataToSubmit1
 * @returns posts
 */
export function getOnePost(dataToSubmit1) {
  const request = axios
    .post("/api/posts/getOnePost", dataToSubmit1)
    .then((response) => response.data);

  return {
    type: POST_ONEGET,
    payload: request,
  };
}
