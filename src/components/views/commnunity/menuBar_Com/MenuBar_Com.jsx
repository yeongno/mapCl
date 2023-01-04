import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getInquiry,
  getNotice,
  getPost,
} from "../../../../redux/_actions/post_action";
import { turnForum } from "../../../../redux/_actions/turn_action";

function MenuBar_Com() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(turnForum("MAIN_FORUM"));
          // dispatch(getPost());
        }}
      >
        자유게시판
      </button>
      <button
        onClick={() => {
          dispatch(turnForum("GENERAL_FORUM"));
          dispatch(getPost());
        }}
      >
        자유게시판
      </button>
      <button
        onClick={() => {
          dispatch(turnForum("NOTICE_FORUM"));
          dispatch(getNotice());
        }}
      >
        공지사항
      </button>
      <button
        onClick={() => {
          dispatch(turnForum("INQUIRY_FORUM"));
          dispatch(getInquiry());
        }}
      >
        문의하기
      </button>
    </div>
  );
}

export default MenuBar_Com;
