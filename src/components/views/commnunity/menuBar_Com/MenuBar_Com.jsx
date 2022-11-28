import React from "react";
import { useDispatch } from "react-redux";
import { getNotice, getPost } from "../../../../redux/_actions/post_action";
import { turnForum } from "../../../../redux/_actions/turn_action";

function MenuBar_Com() {
  const dispatch = useDispatch();
  return (
    <div>
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
        건의
      </button>
    </div>
  );
}

export default MenuBar_Com;
