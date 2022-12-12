import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { turnForum, turnMenu, turnMO } from "../../redux/_actions/turn_action";
const useMOSelector = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const MO = useSelector((state) => state?.turn?.turnMo);
  useEffect(() => {
    executeMO("MINE_MO");
    dispatch(turnMO("MINE_MO"));
  }, []);
  useEffect(() => {
    executeMO(MO);
  }, [MO]);
  const MOValue = {
    //MINE_MO
    MINE_MO() {
      navigate("/mapPage/mineMO");
    },
    //NEAR_MO
    NEAR_MO() {
      navigate("/mapPage/nearMO");
    },
    //OTHER_MO
    OTHER_MO() {
      navigate("/mapPage/otherMO");
    },
  };

  //해당 맵 스위치 코드
  const executeMO = (MOType) => {
    //not a function 오류가 뜸으로 if 걸어둠
    if (MO) MOValue[MOType]();
  };
};
export default useMOSelector;
