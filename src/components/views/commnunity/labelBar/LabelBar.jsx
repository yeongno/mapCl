import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { turnForum } from "../../../../redux/_actions/turn_action";
import "../../../styles/community/labelBar/LabelBar.scss";
function LabelBar(prop) {
  const dispatch = useDispatch();

  useEffect(() => {
    executeForum(prop?.forum);
  }, [prop?.forum]);
  const ForumValue = {
    //메인 페이지
    MAIN_FORUM() {
      return (
        <div className="communityLabelBar_container">
          <div className="communityLabelBar_wrapper">
            <span>메인 게시글</span>
            <div className="communityLabelBar__partition" />
          </div>
        </div>
      );
    },
    //제너럴 페이지
    GENERAL_FORUM() {
      // dispatch(getPost());
      return (
        <div className="communityLabelBar_container">
          <div className="communityLabelBar_wrapper">
            <span>자유 게시글</span>
            <div className="communityLabelBar__partition" />
          </div>
        </div>
      );
    },
    //문의 페이지
    INQUIRY_FORUM() {
      // dispatch(getInquiry());
      return (
        <div className="communityLabelBar_container">
          <div className="communityLabelBar_wrapper">
            <span>문의 게시글</span>
            <div className="communityLabelBar__partition" />
          </div>
        </div>
      );
    },
    //메인 페이지
    NOTICE_FORUM() {
      // dispatch(getNotice());
      return (
        <div className="communityLabelBar_container">
          <div className="communityLabelBar_wrapper">
            <span>공지 게시글</span>
            <div className="communityLabelBar__partition" />
          </div>
        </div>
      );
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
