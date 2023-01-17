import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getInquiry,
  getNotice,
  getPost,
} from "../../redux/_actions/post_action";
import { turnForum, turnMenu } from "../../redux/_actions/turn_action";
const useForumSelector = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const forum = useSelector((state) => state?.turn?.turnForum);
  useEffect(() => {
    // executeForum("MAIN_FORUM");
    // dispatch(turnForum("MAIN_FORUM"));
  }, []);
  useEffect(() => {
    executeForum(forum);
  }, [forum]);
  const ForumValue = {
    //메인 페이지
    MAIN_FORUM() {
      navigate("/communityPage/main");
    },
    //제너럴 페이지
    GENERAL_FORUM() {
      // dispatch(getPost());
      navigate("/communityPage/general");
    },
    //문의 페이지
    INQUIRY_FORUM() {
      // dispatch(getInquiry());
      navigate("/communityPage/inquiry");
    },
    //메인 페이지
    NOTICE_FORUM() {
      // dispatch(getNotice());
      navigate("/communityPage/notice");
    },
  };

  //해당 맵 스위치 코드
  const executeForum = (ForumType) => {
    //not a function 오류가 뜸으로 if 걸어둠
    if (forum) ForumValue[ForumType]();
  };
};
export default useForumSelector;
