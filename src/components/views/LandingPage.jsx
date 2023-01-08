import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
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
import Axios from "../../axios/Axios";
import Test from "./test/Test";
import PageLabel from "./common/pageLabel/PageLabel";
import DrawerHeader from "./header/DrawerHeader";
import DetailsComponent from "./test/Test copy 2";
import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import Loading from "./commnunity/loading/Loading";

function LandingPage({ handleLogin }) {
  const renderLoader = () => <Loading />;
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
    <div className="LandingPage-container">
      <DrawerHeader />
      <Header />
      <Suspense fallback={renderLoader()}>
        <div className="basicBackground-container">
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
}

export default LandingPage;
