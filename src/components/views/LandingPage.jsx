import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { GET_MYUSERINFO } from "../../config/tempClientConfig";
import { tmpLogin } from "../../redux/_actions/user_action";
import Header from "./header/Header";
import Marker from "./map/Marker";
import Marker2 from "./map/Marker2";
import Marker3 from "./map/Marker3";
import Marker4 from "./map/Marker4";
import Marker5 from "./map/Marker5";
import MarkerCluster from "./map/MarkerCluster";
import Nomal from "./map/nomal";
import Map1 from "./reactMap/Map1";
import Map2 from "./reactMap/Map2";
import Map3 from "./reactMap/Map3";
import Map4 from "./reactMap/Map4";
import Map5 from "./reactMap/Map5";
import Map6 from "./reactMap/Map6";
import Map7 from "./reactMap/Map7";
import Sample from "./reactMap/Sample";
import "../styles/LandingPage.scss";
import ManuBar from "./manuBar/ManuBar";
import { turnMenu } from "../../redux/_actions/turn_action";

function LandingPage({ handleLogin }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state?.turn?.turnMenu);

  useEffect(() => {
    navigate("/mainPage");
  }, []);
  useEffect(() => {
    dispatch(tmpLogin()).then((response) => {
      console.log("ss", response);
    });
  }, []);
  useEffect(() => {
    //상위 컴퍼넌트가 네비게이션을 쓰며 했으므로 setTimer로 이벤트 동작 시킴
    executeMenu("MAIN_MENU");
    dispatch(turnMenu("MAIN_MENU"));
  }, []);
  useEffect(() => {
    executeMenu(menu);
  }, [menu]);
  const MenuValue = {
    //기본 맵
    MAIN_MENU() {
      navigate("/mainPage");
    },
    //프로필 맵
    MAP_MENU() {
      navigate("/mapPage");
    },
  };

  //해당 맵 스위치 코드
  const executeMenu = (MenuType) => {
    //not a function 오류가 뜸으로 if 걸어둠
    if (menu) MenuValue[MenuType]();
  };

  return (
    <div className="landingPage-container">
      {/* <Marker /> */}
      {/* <Marker2 /> */}
      {/* <Marker3 /> */}
      {/* <Marker4 /> */}
      {/* <Marker5 /> */}
      {/* <Nomal /> */}
      {/* <MarkerCluster /> */}
      {/* <Map1 /> */}
      {/* <Map2 /> */}
      {/* <Map3 /> */}
      {/* <Map4 /> */}
      {/* <Map5 /> */}
      {/* <Map6 /> */}
      {/* <Map7 /> */}
      {/* <Sample /> */}
      <Header />
      <ManuBar />
      <Outlet />
    </div>
  );
}

export default LandingPage;
