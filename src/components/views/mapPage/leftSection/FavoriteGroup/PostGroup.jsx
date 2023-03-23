import {
  ArrowDownOutlined,
  ArrowRightOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import useMyInfo from "../../../../../hook/useMyInfo";
import { setLocation } from "../../../../../redux/_actions/mapNav/location_action";
import { PriorityMap } from "../../../../../redux/_actions/mapNav/priority_action";
import "../../../../styles/mapPage/leftSection/postGroup/PostGroup.scss";

function PostGroup() {
  const [onAcc, setOnAcc] = useState(true);
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
    const Ref_style = window.getComputedStyle(panel_Ref.current);
    if (Ref_style.getPropertyValue("max-Height") === "0px") {
      panel_Ref.current.style.maxHeight = "fit-Content";
      setOnAcc(false);
    } else {
      panel_Ref.current.style.maxHeight = "0";
      setOnAcc(true);
    }
  };

  return (
    <div className="postGroup-accordian">
      <div
        className="postGroup-accordian__btn--turn"
        ref={btn_Ref}
        onClick={onActive}
      >
        나의 글
      </div>
      <div className="postGroup-panel" ref={panel_Ref}>
        {/* <div className="Priority-labelSection">1번 선호지역</div> */}
        <div className="Priority-section">
          <div className="nameLabel">1st</div>
          {"  "}
          <div className="Priority-nickSection">{firstPriority?.nickName}</div>
          <div
            className="move__btn"
            onClick={() => {
              dispatch(setLocation(firstPriority?.lat, firstPriority?.lng));
            }}
          >
            <ArrowRightOutlined />
          </div>
        </div>
        <div className="ctrSection">
          <div className="ctrSection__btn--delete">X</div>
          <div className="ctrSection__btn--modify">Modify</div>
        </div>
        {/* <div className="Priority-labelSection">2번 선호지역</div> */}
        <div className="Priority-section">
          <div className="nameLabel">2nd</div>{" "}
          <div className="Priority-nickSection">{secondPriority?.nickName}</div>
          <div
            className="move__btn"
            onClick={() => {
              dispatch(setLocation(secondPriority?.lat, secondPriority?.lng));
            }}
          >
            <ArrowRightOutlined />
          </div>{" "}
        </div>
        <div className="ctrSection">
          <div className="ctrSection__btn--delete">
            <span>X</span>
          </div>
          <div className="ctrSection__btn--modify">Modify</div>
        </div>
        {/* <div className="Priority-labelSection">3번 선호지역</div> */}
        <div className="Priority-section">
          <div className="nameLabel">3rd</div>{" "}
          <div className="Priority-labelSection"></div>
          <div className="Priority-nickSection">{thirdPriority?.nickName}</div>
          <div
            className="move__btn"
            onClick={() => {
              dispatch(setLocation(thirdPriority?.lat, thirdPriority?.lng));
            }}
          >
            <ArrowRightOutlined />
          </div>{" "}
        </div>
        <div className="ctrSection">
          <div className="ctrSection__btn--delete">X</div>
          <div className="ctrSection__btn--modify">Modify</div>
        </div>
      </div>
      <div className="postGroup-bottom" onClick={onActive}>
        {(onAcc && <ArrowDownOutlined />) || <ArrowUpOutlined />}
      </div>
    </div>
  );
}

export default PostGroup;
