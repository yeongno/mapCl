import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { turnForum } from "../../../../redux/_actions/turn_action";

function LabelBar(prop) {
  const dispatch = useDispatch();

  useEffect(() => {
    executeForum(prop?.forum);
  }, [prop?.forum]);
  const ForumValue = {
    //메인 페이지
    MAIN_FORUM() {
      <div>a</div>;
      return <div>a</div>;
    },
    //제너럴 페이지
    GENERAL_FORUM() {
      // dispatch(getPost());
      <div>a</div>;
      return <div>a1</div>;
    },
    //문의 페이지
    INQUIRY_FORUM() {
      // dispatch(getInquiry());
    },
    //메인 페이지
    NOTICE_FORUM() {
      // dispatch(getNotice());
    },
  };

  //해당 맵 스위치 코드
  const executeForum = (ForumType) => {
    //not a function 오류가 뜸으로 if 걸어둠
    if (prop?.forum) ForumValue[ForumType]();
  };

  return <div> {prop?.forum && <>{ForumValue[prop?.forum]()}</>}</div>;
}

export default LabelBar;
