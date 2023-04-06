import {
  ArrowDownOutlined,
  ArrowRightOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { message } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useMyInfo from "../../../../../hook/useMyInfo";
import { setLocation } from "../../../../../redux/_actions/mapNav/location_action";
import { PriorityMap } from "../../../../../redux/_actions/mapNav/priority_action";
import { turn_mrFilter } from "../../../../../redux/_actions/turn_action";
import "../../../../styles/mapPage/leftSection/favoriteGroup/FavoriteGroup.scss";

function FavoriteGroup({ setAccActive, accActive }) {
  const [onAcc, setOnAcc] = useState(true);
  const panel_Ref = useRef();
  const btn_Ref = useRef();
  const MyInfo = useMyInfo();
  const [firstPriority, setFirst] = useState(null);
  const [secondPriority, setSecond] = useState(null);
  const [thirdPriority, setThird] = useState(null);
  const dispatch = useDispatch();

  //열려 있는 맵의 infoWindow의 비/활성화 플래그 값
  const actInfoWindow = useSelector((state) => state.turn.turnInfoWindow);

  //mineMo의 다른 그룹 Acc가 열릴경우 해당 값 true로 변경
  const [otherAcc, setOtehrAcc] = useState(false);

  useEffect(() => {}, []);

  useEffect(() => {
    if (MyInfo) {
      setFirst(MyInfo[0].priority[0]);
      setSecond(MyInfo[0].priority[1]);
      setThird(MyInfo[0].priority[2]);
    }
  }, [MyInfo]);

  //mineMo의 다른 그룹이 열릴 경우 해당 Acc 닫기
  useEffect(() => {
    if (accActive && otherAcc) {
      console.log(accActive);
      panel_Ref.current.style.maxHeight = "0";
      setOnAcc(true);
    }
    //다른 그룹에서  accActive값이 바뀌면 otherAcc 값 변경
    setOtehrAcc(true);
  }, [accActive]);

  const onActive = () => {
    const Ref_style = window.getComputedStyle(panel_Ref.current);
    if (Ref_style.getPropertyValue("max-Height") === "0px") {
      setOtehrAcc(false);
      setAccActive(true);
      panel_Ref.current.style.maxHeight = "fit-Content";
      setOnAcc(false);
    } else {
      panel_Ref.current.style.maxHeight = "0";
      setOnAcc(true);
    }
  };

  return (
    <div className="favoriteGroup-accordian">
      <div
        className="favoriteGroup-accordian__btn--turn"
        ref={btn_Ref}
        onClick={onActive}
      >
        내 선호지역
      </div>
      <div className="favoriteGroup-panel" ref={panel_Ref}>
        {/* <div className="Priority-labelSection">1번 선호지역</div> */}
        <div className="Priority-section">
          <div className="nameLabel">1st</div>
          {"  "}
          <div className="Priority-nickSection">{firstPriority?.nickName}</div>
          <div
            className="move__btn"
            onClick={() => {
              dispatch(setLocation(firstPriority?.lat, firstPriority?.lng));
              dispatch(turn_mrFilter("FAVORITEMR_FILTER"));
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
              if (actInfoWindow) {
                message.error("열려 있는 작업을 종료 해주세요");
                return;
              }
              dispatch(setLocation(secondPriority?.lat, secondPriority?.lng));
              dispatch(turn_mrFilter("FAVORITEMR_FILTER"));
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
              dispatch(turn_mrFilter("FAVORITEMR_FILTER"));
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
      <div className="favoriteGroup-bottom" onClick={onActive}>
        {(onAcc && <ArrowDownOutlined />) || <ArrowUpOutlined />}
      </div>
    </div>
  );
}

export default FavoriteGroup;
