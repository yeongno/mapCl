import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import useCoords from "../../../../hook/useCoords";
import {
  setCenterLocation,
  setMainLocation,
} from "../../../../redux/_actions/mapNav/location_action";
import { turnMap, turnMapAct } from "../../../../redux/_actions/turn_action";
import InterestedMap from "./maps/InterestedMap";
import "../../../styles/mapPage/rightSection/RightSection.scss";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import useTmpCenter from "../../../../hook/common/useTmpCenter";
import UserList from "./list/UserList/UserList";
import CtrBar from "./ctrBar/CtrBar";
import Btn__TopTogle from "../../commnunity/common/Btn__TopTogle";
import GroupList from "./list/groupList.jsx/GroupList";
import GenerList from "../../commnunity/common/renderList/GenerList";
import AdList from "../../commnunity/common/renderList/AdList";

function RightSection() {
  const navigate = useNavigate();
  const getTopic = useSelector((state) => state?.turn?.turnTopicCtr);

  //MapAct의 reducer 값
  const mapAct = useSelector((state) => state?.turn?.turnMapAct); 

  const dispatch = useDispatch();
  const { latitude, longitude, isLoaded } = useCoords();
  const [latitude1, setlatitude1] = useState();
  const [longitude1, setlongitude1] = useState();
  //accordian check activing
  const [onAcc, setOnAcc] = useState(false);
  const Map_Ref = useRef();

  const getMarkers = useTmpCenter();

  useEffect(() => {
    setlatitude1(latitude);
    setlongitude1(longitude);
    dispatch(
      setMainLocation({ center: { lat: "33.450936", lng: "126.569477" } })
    );
  }, []);
  useEffect(() => {
    setlatitude1(latitude);
    setlongitude1(longitude);
  }, [latitude]);
  useEffect(() => {
    if(mapAct){
      Map_Ref.current.style.display = "block";
    }else{
      Map_Ref.current.style.display = "none";
    }
  }, [mapAct])
  
  const onTurn = () => {
    const Ref_style = window.getComputedStyle(Map_Ref.current);
    if(mapAct){
      dispatch(turnMapAct(false))
    }else{
      dispatch(turnMapAct(true))
    }
  };
  return (
    <div className="RightSection-container">
      {/* <Btn__TopTogle /> */}
      <div className="test">
        <div className="map-roof">My Map</div>
        <div className="map-container" ref={Map_Ref}>
          <InterestedMap latitude1={latitude1} longitude1={longitude1} />
        </div>
        <div className="accordian-container--map" onClick={onTurn}>
          {(!mapAct && <ArrowDownOutlined />) || <ArrowUpOutlined />}
        </div>
        <CtrBar />
      </div>

      <div className="mapList-container">
        <div className="list-container">
          <UserList />
          {getTopic == false ? <GenerList /> : <AdList />}
          {/* <GroupList />
          <GroupList />
          <GroupList /> */}
        </div>
      </div>
    </div>
  );
}

export default RightSection;
