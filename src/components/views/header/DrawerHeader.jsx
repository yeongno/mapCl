import { MenuOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import "../../styles/header/DrawerHeader.scss";
function DrawerHeader() {
  const Container_Ref = useRef();
  const Drawer_Ref = useRef();
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
    } else {
      Drawer_Ref.current.style.width = "0";
    }
  }, [onDrawer]);

  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY > 230) {
      setScroll(true);
      Container_Ref.current.style.position = "sticky";
    } else if (window.scrollY < 200) {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
      Container_Ref.current.style.position = "absolute";
      //   Test_Ref.current.style.maxHeight = "100%";
    }
  };
  return (
    <div className="headerDrawer-container" ref={Container_Ref}>
      <div className="headerDrawer-wrapper">
        <div className="headerDrawer__btn" onClick={onMenu}>
          <MenuOutlined />
        </div>
      </div>
      <div className="drawer-container" ref={Drawer_Ref}>
        <div className="drawer-padding" onClick={offMenu}></div>
        <div className="drawer-main" onClick={() => console.log("bb")}></div>
      </div>
    </div>
  );
}

export default DrawerHeader;
