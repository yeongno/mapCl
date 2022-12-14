import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { turnForum, turnMenu } from "../../redux/_actions/turn_action";
const userMapSelector = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const map = useSelector((state) => state?.turn?.turnMap);

  useEffect(() => {
    //상위 컴퍼넌트가 네비게이션을 쓰며 했으므로 setTimer로 이벤트 동작 시킴
    executeMap("DEFAULT_MAP");
    dispatch(turnMap("DEFAULT_MAP"));
  }, []);
  useEffect(() => {
    executeMap(map);
  }, [map]);
  const mapValue = {
    //기본 맵
    DEFAULT_MAP() {
      navigate("/mapPage/defaultMap");
    },
    //프로필 맵
    REL_MAP() {
      navigate("/mapPage/relationMap");
    },
    TEST_MAP() {
      navigate("/mapPage/testMap");
    },
    NEAR_MAP() {
      navigate("/mapPage/nearMap");
    },
    INTERESTED_MAP() {
      navigate("/mapPage/interestedMap");
    },
  };

  //해당 맵 스위치 코드
  const executeMap = (MapType) => {
    //not a function 오류가 뜸으로 if 걸어둠
    if (map) mapValue[MapType]();
  };
};
export default userMapSelector;
