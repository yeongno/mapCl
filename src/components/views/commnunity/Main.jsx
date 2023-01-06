import React, { useEffect, useRef, useState } from "react";
import "../../styles/community/main/Main.scss";
import MiniGeneral from "./main/MiniGeneral";
import MenuBox from "./menuBox/MenuBox";
function Main() {
  const MenuTool_Ref = useRef();
  // 스크롤이 50px 이상 내려올경우 true값을 넣어줄 useState
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 450) {
      setScroll(true);
      MenuTool_Ref.current.style.position = "sticky";

      MenuTool_Ref.current.style.left = "60%";
      MenuTool_Ref.current.style.width = "100%";
      MenuTool_Ref.current.style.hieght = "100%";
      MenuTool_Ref.current.style.top = "3rem";
      console.log(scroll);
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      MenuTool_Ref.current.style.position = "relative";
      MenuTool_Ref.current.style.left = "";
      MenuTool_Ref.current.style.top = "";

      setScroll(false);
    }
  };
  return (
    <div className="communityMain-container">
      <div className="communityMain-left">
        <MiniGeneral />
      </div>
      <div className="communityMain-right">
        <div className="menuTool-container" ref={MenuTool_Ref}>
          <MenuBox />
        </div>
      </div>
    </div>
  );
}

export default Main;
