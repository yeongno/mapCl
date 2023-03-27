import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { turnMap, turnMO } from "../../../../redux/_actions/turn_action";
import FavoriteGroup from "./mineMO/FavoriteGroup";
import "../../../styles/mapPage/leftSection/LeftSection.scss";
import useMOSelector from "../../../../hook/navSelector/useMOSelector";

function LeftSection() {
  const MO = useSelector((state) => state?.turn?.turnMo);
  const Left_Ref = useRef();
  const Near_Ref = useRef();
  const Other_Ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onMine = () => {
    dispatch(turnMO("MINE_MO"));
    Left_Ref.current.style.background = "black";
    Near_Ref.current.style.background = "blue";
    Other_Ref.current.style.background = "blue";
  };
  const onNear = () => {
    dispatch(turnMO("NEAR_MO"));
    Near_Ref.current.style.background = "black";
    Left_Ref.current.style.background = "blue";
    Other_Ref.current.style.background = "blue";
  };
  const onOther = () => {
    dispatch(turnMO("OTHER_MO"));
    Other_Ref.current.style.background = "black";
    Near_Ref.current.style.background = "blue";
    Left_Ref.current.style.background = "blue";
  };
  useMOSelector();
  useEffect(() => {
    dispatch(turnMO("MINE_MO"));
  }, []);

  return (
    <div className="leftSection-container">
      <div className="leftSection-wrapper">
        <div className="roof-container">
          <div className="left-roof" onClick={onMine} ref={Left_Ref}>
            내 마크
          </div>
          <div className="middle-roof" onClick={onNear} ref={Near_Ref}>
            주변 마크
          </div>
          <div className="right-roof" onClick={onOther} ref={Other_Ref}>
            기타
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default LeftSection;
