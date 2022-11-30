import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { turnForum, turnMenu } from "../../redux/_actions/turn_action";
const useForumSelector = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const forum = useSelector((state) => state?.turn?.turnForum);
  useEffect(() => {
    executeForum("GENERAL_FORUM");
    dispatch(turnForum("GENERAL_FORUM"));
  }, []);
  useEffect(() => {
    executeForum(forum);
  }, [forum]);
  const ForumValue = {
    //메인 페이지
    GENERAL_FORUM() {
      navigate("/communityPage/general");
    },
    //문의 페이지
    INQUIRY_FORUM() {
      navigate("/communityPage/inquiry");
    },
    //메인 페이지
    NOTICE_FORUM() {
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
