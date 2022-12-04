import React from "react";
import { useDispatch } from "react-redux";
import {
  getInquiry,
  getNotice,
  getPost,
} from "../../../../redux/_actions/post_action";
import { turnForum, turnTest } from "../../../../redux/_actions/turn_action";

function MenuBar_Test() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(turnTest("TEST1_TEST"));
        }}
      >
        TEST1
      </button>
      <button
        onClick={() => {
          dispatch(turnTest("TEST2_TEST"));
        }}
      >
        TEST2
      </button>
    </div>
  );
}

export default MenuBar_Test;
