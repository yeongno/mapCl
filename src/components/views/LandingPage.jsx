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
import MenuBar from "./manuBar/MenuBar";
import { turnMenu } from "../../redux/_actions/turn_action";
import useMenuSelector from "../../hook/navSelector/useMenuSelector";

function LandingPage({ handleLogin }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //MenuBar hook
  useMenuSelector();

  useEffect(() => {
    navigate("/mainPage");
  }, []);
  useEffect(() => {
    dispatch(tmpLogin()).then((response) => {});
  }, []);

  return (
    <div className="landingPage-container">
      <Header />
      <MenuBar />
      <Outlet />
    </div>
  );
}

export default LandingPage;
