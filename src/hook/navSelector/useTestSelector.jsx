import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { turnForum } from "../../redux/_actions/turn_action";
const useTestSelector = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const test = useSelector((state) => state?.turn?.turnTest);
  useEffect(() => {
    executeForum("TEST1_TEST");
    dispatch(turnForum("TEST1_TEST"));
  }, []);
  useEffect(() => {
    executeForum(test);
  }, [test]);
  const TestValue = {
    //메인 페이지
    TEST1_TEST() {
      navigate("/test/test1");
    },
    TEST2_TEST() {
      navigate("/test/test2");
    },
  };

  //해당 맵 스위치 코드
  const executeForum = (TestType) => {
    //not a function 오류가 뜸으로 if 걸어둠
    if (test) TestValue[TestType]();
  };
};
export default useTestSelector;
