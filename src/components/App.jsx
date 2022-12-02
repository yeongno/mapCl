import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./views/LandingPage";
import MapPage from "./views/mapPage/MapPage";
import DefaultMap from "./views/mapPage/rightSection/maps/common/DefaultMap";
import NearByUsersMap from "./views/mapPage/rightSection/maps/NearByUsersMap";
import RelationMap from "./views/mapPage/rightSection/maps/RelationMap";
import SampleMap from "./views/mapPage/rightSection/maps/SampleMap";

import { getAccessToken, login, setRefreshTokenToCookie } from "../auth/auth";
import token_reducer from "../redux/_reducers/token_reducer";
import { deleteToken, setToken } from "../redux/_actions/token_action";
import LoginPage from "./views/header/LoginPage/LoginPage";
import Hello from "./views/header/LoginPage/Hello";
import { DELETE_TOKEN, SET_TOKEN } from "../redux/_actions/types";
import axios from "axios";
import InterestedMap from "./views/mapPage/rightSection/maps/InterestedMap";
import MainPage from "./views/mainPage/MainPage";
import CommunityPage from "./views/commnunity/CommunityPage";
import General from "./views/commnunity/General";
import Notice from "./views/commnunity/Notice";
import DetailPost from "./views/commnunity/DetailPost/DetailPost";
import Inquiry from "./views/commnunity/Inquiry";

function App() {
  // const isAuth = useSelector((state) => state.user.isAuth);
  // axios.defaults.baseURL = "https://localhost:5000/";
  // axios.defaults.withCredentials = true;
  const dispatch = useDispatch();
  const token = getAccessToken();

  function handleLogin(id, password) {
    let token = login(id, password);
    if (token) {
      console.log("로그인 성공!");
      dispatch(setToken(token, true));
      setRefreshTokenToCookie(token.refresh_token);
    } else {
      console.log("로그인 실패");
      dispatch(setToken(token, false));
    }
  }

  const handleLogout = () => {
    dispatch(deleteToken());
  };

  useEffect(() => {
    window.addEventListener("storage", (e) => {
      if (e.key === "logout") {
        console.log("로그아웃 감지");
        dispatch({
          type: "DELETE_TOKEN",
        });
      }
    });
  }, []);
  useEffect(() => {
    if (token) {
      dispatch(setToken(token, true));
      setRefreshTokenToCookie(token.refresh_token);
    } else {
      dispatch(setToken(token, false));
    }
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/mapPage" element={<MapPage />}>
            <Route path="/mapPage/defaultMap" element={<DefaultMap />} />
            <Route path="/mapPage/relationMap" element={<RelationMap />} />
            <Route path="/mapPage/testMap" element={<SampleMap />} />
            <Route path="/mapPage/nearMap" element={<NearByUsersMap />} />
            <Route path="/mapPage/interestedMap" element={<InterestedMap />} />
          </Route>
          <Route path="/mainPage" element={<MainPage />}></Route>
          <Route path="/communityPage" element={<CommunityPage />}>
            <Route path="/communityPage/:postId" element={<DetailPost />} />
            <Route path="/communityPage/general" element={<General />} />
            <Route path="/communityPage/notice" element={<Notice />} />
            <Route path="/communityPage/inquiry" element={<Inquiry />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/hello" element={<Hello handleLogout={handleLogout} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
