import { Suspense, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./views/LandingPage";
import MapPage from "./views/mapPage/MapPage";

import { getAccessToken, login, setRefreshTokenToCookie } from "../auth/auth";
import { deleteToken, setToken } from "../redux/_actions/token_action";
import LoginPage from "./views/header/LoginPage/LoginPage";
import Hello from "./views/header/LoginPage/Hello";
import InterestedMap from "./views/mapPage/rightSection/maps/InterestedMap";
import MainPage from "./views/mainPage/MainPage";
import CommunityPage from "./views/commnunity/CommunityPage";
import General from "./views/commnunity/General";
import Notice from "./views/commnunity/Notice";
import DetailPost from "./views/commnunity/DetailPost/DetailPost";
import Inquiry from "./views/commnunity/Inquiry";
import RegisterPage from "./views/header/RegisterPage/RegisterPage";
import Test from "./views/test/Test";
import Test1 from "./views/test/menuBar_Test/Test1";
import Test2 from "./views/test/menuBar_Test/Test2";
import MineMO from "./views/mapPage/leftSection/mineMO/MineMO";
import OtherMO from "./views/mapPage/leftSection/otherMO/OtherMO";
import NearMO1 from "./views/mapPage/leftSection/nearMO/NearMO1";
import GlobalStyles from "./views/GlobalStyles ";
import "antd/dist/antd.css";
import Main from "./views/commnunity/Main";

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
      <GlobalStyles />{" "}
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/mapPage" element={<MapPage />}>
            <Route path="/mapPage/interestedMap" element={<InterestedMap />} />
            <Route path="/mapPage/mineMO" element={<MineMO />} />
            <Route path="/mapPage/nearMO" element={<NearMO1 />} />
            <Route path="/mapPage/otherMO" element={<OtherMO />} />
          </Route>
          <Route path="/mainPage" element={<MainPage />}></Route>
          <Route path="/test" element={<Test />}>
            <Route path="/test/test1" element={<Test1 />} />
            <Route path="/test/test2" element={<Test2 />} />
          </Route>
          <Route path="/communityPage" element={<CommunityPage />}>
            <Route path="/communityPage/:postId" element={<DetailPost />} />
            <Route path="/communityPage/main" element={<Main />} />
            <Route path="/communityPage/general" element={<General />} />
            <Route path="/communityPage/notice" element={<Notice />} />
            <Route path="/communityPage/inquiry" element={<Inquiry />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/hello" element={<Hello handleLogout={handleLogout} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
