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
import { turnMap } from "../../../../redux/_actions/turn_action";
import InterestedMap from "./maps/InterestedMap";
import "../../../styles/mapPage/RightSection.scss";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import useTmpCenter from "../../../../hook/common/useTmpCenter";
import UserList from "./list/UserList";
import CtrBar from "./ctrBar/CtrBar";
import Btn__TopTogle from "../../commnunity/common/Btn__TopTogle";

function RightSection() {
  const navigate = useNavigate();
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
  const onTurn = () => {
    const Ref_style = window.getComputedStyle(Map_Ref.current);
    if (Ref_style.getPropertyValue("display") === "block") {
      Map_Ref.current.style.display = "none";
      setOnAcc(true);
    } else {
      setOnAcc(false);
      Map_Ref.current.style.display = "block";
    }
  };
  return (
    <div className="RightSection-container">
      <Btn__TopTogle />
      <div className="test">
        <div className="map-roof">My Map</div>
        <div className="map-container" ref={Map_Ref}>
          <InterestedMap latitude1={latitude1} longitude1={longitude1} />
        </div>
        <div className="accordian-container--map" onClick={onTurn}>
          {(onAcc && <ArrowDownOutlined />) || <ArrowUpOutlined />}
        </div>
      </div>

      <div className="mapList-container">
        <CtrBar />
        <div className="list-container">
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
