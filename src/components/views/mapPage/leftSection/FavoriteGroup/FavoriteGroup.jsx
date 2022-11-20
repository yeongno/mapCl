import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import useMyInfo from "../../../../../hook/useMyInfo";
import { setLocation } from "../../../../../redux/_actions/mapNav/location_action";
import { PriorityMap } from "../../../../../redux/_actions/mapNav/priority_action";
import "../../../../styles/mapPage/leftSection/favoriteGroup/FavoriteGroup.scss";

function FavoriteGroup() {
  const panel_Ref = useRef();
  const btn_Ref = useRef();
  const MyInfo = useMyInfo();
  const [firstPriority, setFirst] = useState(null);
  const [secondPriority, setSecond] = useState(null);
  const [thirdPriority, setThird] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  useEffect(() => {
    if (MyInfo) {
      setFirst(MyInfo[0].priority[0]);
      setSecond(MyInfo[0].priority[1]);
      setThird(MyInfo[0].priority[2]);
    }
  }, [MyInfo]);
  const onActive = () => {
    console.log("aaa", btn_Ref.current);
    const Ref_style = window.getComputedStyle(panel_Ref.current);
    if (Ref_style.getPropertyValue("max-Height") === "0px") {
      panel_Ref.current.style.maxHeight = "fit-Content";
    } else {
      panel_Ref.current.style.maxHeight = "0";
    }
  };

  return (
    <div className="favoriteGroup-accordian">
      <div
        className="favoriteGroup-accordian__btn--turn"
        ref={btn_Ref}
        onClick={onActive}
      >
        btn
      </div>
      <div className="favoriteGroup-panel" ref={panel_Ref}>
        <div className="firstPriority-section">
          <div className="firstPriority-icoSection"></div>
          <div
            className="firstPriority-nickSection"
            onClick={() => {
              dispatch(setLocation(firstPriority?.lat, firstPriority?.lng));
            }}
          >
            {firstPriority?.nickName}
          </div>
          <div className="firstPriority-ctrSection">
            <div className="firstPriority-ctrSection__btn--add">+</div>
            <div className="firstPriority-ctrSection__btn--delete">-</div>
            <div className="firstPriority-ctrSection__btn--modify">M</div>
          </div>
        </div>
        <div className="secondPriority-section">
          <div className="secondPriority-icoSection"></div>
          <div className="secondPriority-nickSection">
            {secondPriority?.nickName}
          </div>
          <div className="secondPriority-ctrSection">
            <div className="secondPriority-ctrSection__btn--add"></div>
            <div className="secondPriority-ctrSection__btn--delete"></div>
            <div className="secondPriority-ctrSection__btn--modify"></div>
          </div>
        </div>
        <div className="thirdPriority-section">
          <div className="thirdPriority-icoSection"></div>
          <div className="thirdPriority-nickSection">
            {thirdPriority?.nickName}
          </div>
          <div className="thirdPriority-ctrSection">
            <div className="thirdPriority-ctrSection__btn--add"></div>
            <div className="thirdPriority-ctrSection__btn--delete"></div>
            <div className="thirdPriority-ctrSection__btn--modify"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteGroup;
