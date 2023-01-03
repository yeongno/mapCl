import { MenuOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { turnMenu } from "../../../redux/_actions/turn_action";
import "../../styles/header/DrawerHeader.scss";
function DrawerHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Container_Ref = useRef();
  const Drawer_Ref = useRef();
  const Content_Ref = useRef();
  const Menu_Ref = useRef();
  const [onDrawer, setOnDrawer] = useState(false);
  // 스크롤이 50px 이상 내려올경우 true값을 넣어줄 useState
  const [scroll, setScroll] = useState(false);
  const body = document.body.style.height;
  const onMenu = () => {
    setOnDrawer(true);
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
  };
  const offMenu = () => {
    setOnDrawer(false);
    document.body.style.height = "";
    document.body.style.overflow = "";
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(window.scrollY);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);
  useEffect(() => {
    if (onDrawer) {
      Drawer_Ref.current.style.width = "100vw";
      Content_Ref.current.style.display = "";
    } else {
      Drawer_Ref.current.style.width = "0";
      Content_Ref.current.style.display = "none";
      document.body.style.height = "";
      document.body.style.overflow = "";
    }
  }, [onDrawer]);
  useEffect(() => {
    setOnDrawer(false);
    document.body.style.height = "";
    document.body.style.overflow = "";
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY > 230) {
      setScroll(true);
      Container_Ref.current.style.position = "sticky";
      Container_Ref.current.style.zIndex = "9000";
    } else if (window.scrollY < 200) {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
      Container_Ref.current.style.position = "absolute";
      Container_Ref.current.style.zIndex = "0";
      //   Test_Ref.current.style.maxHeight = "100%";
    }
  };
  return (
    <div className="headerDrawer-container" ref={Container_Ref}>
      <div className="headerDrawer-wrapper" ref={Menu_Ref}>
        <div className="headerDrawer__btn" onClick={onMenu}>
          <MenuOutlined />
        </div>
      </div>
      <div className="drawer-container" ref={Drawer_Ref}>
        <div className="drawer-padding" onClick={offMenu}></div>
        <div className="drawer-main" ref={Content_Ref}>
          <ul>
            <ol>계정 관련 메뉴</ol>
            <li
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </li>
            <li>알림</li>
            <li>내 정보 변경</li>
            <ol>주요 페이지</ol>
            <li
              onClick={() => {
                dispatch(turnMenu("MAIN_MENU"));
                setOnDrawer(false);
              }}
            >
              메인 페이지
            </li>
            <li
              onClick={() => {
                dispatch(turnMenu("MAP_MENU"));
                setOnDrawer(false);
              }}
            >
              맵 페이지
            </li>
            <li
              onClick={() => {
                dispatch(turnMenu("COMMUNITY_MENU"));
                setOnDrawer(false);
              }}
            >
              커뮤니티 페이지
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DrawerHeader;
