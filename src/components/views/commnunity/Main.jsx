import React, { useEffect, useRef, useState } from "react";
import "../../styles/community/main/Main.scss";
import MiniGeneral from "./main/MiniGeneral";
import MiniInquiry from "./main/MiniInquiry";
import MiniNotice from "./main/MiniNotice";
import MenuBox from "./menuBox/MenuBox";
function Main() {
  const MenuTool_Ref = useRef();
  const Right_Ref = useRef();
  const Left_Ref = useRef();
  const Main_Ref = useRef();

  // 스크롤이 50px 이상 내려올경우 true값을 넣어줄 useState
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 450) {
      setScroll(true);
      // MenuTool_Ref.current.style.position = "sticky";
      // MenuTool_Ref.current.style.left = "60%";
      // MenuTool_Ref.current.style.top = "3rem";
      Main_Ref.current.style.height = Left_Ref.current.style.height;
      console.log(scroll);
    } else if (window.scrollY < 450) {
      Main_Ref.current.style.height = Left_Ref.current.style.height;
      // MenuTool_Ref.current.style.position = "relative";
      // MenuTool_Ref.current.style.left = "";
      // MenuTool_Ref.current.style.top = "0";

      setScroll(false);
    }
  };
  return (
    <div className="communityMain-container" ref={Main_Ref}>
      <div className="communityMain-left" ref={Left_Ref}>
        <MiniNotice />
        <MiniGeneral />
        <MiniInquiry />
      </div>
      <div className="communityMain-right" ref={Right_Ref}>
        <div className="menuTool-container" ref={MenuTool_Ref}>
          <MenuBox />
        </div>
      </div>
    </div>
  );
}

export default Main;
