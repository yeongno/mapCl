import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { GET_MYUSERINFO } from "../../config/tempClientConfig";
import {
  GetMyAds,
  GetmyPosts,
  tmpLogin,
} from "../../redux/_actions/user_action";
import Header from "./header/Header";
import "../styles/LandingPage.scss";
import useMenuSelector from "../../hook/navSelector/useMenuSelector";
import DrawerHeader from "./header/DrawerHeader";
import Loading from "./commnunity/loading/Loading";
import { BrowserView, MobileView } from "react-device-detect";
import Default from "./mobile/Default";
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
    dispatch(GetmyPosts()).then((response) => {});
    dispatch(GetMyAds()).then((response) => {});
  }, []);

  return (
    <div className="LandingPage-container">
      <BrowserView>
        <DrawerHeader />
        <Header />
        <Suspense fallback={renderLoader()}>
          <div className="basicBackground-container">
            <Outlet />
          </div>
        </Suspense>
      </BrowserView>

      <MobileView>
        <Default />
      </MobileView>
    </div>
  );
}

export default LandingPage;
