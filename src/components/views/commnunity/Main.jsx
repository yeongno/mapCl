import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { turnForum, turnMenu } from "../../../redux/_actions/turn_action";
import "../../styles/community/main/Main.scss";
import MiniGeneral from "./main/MiniGeneral";
import MiniInquiry from "./main/MiniInquiry";
import MiniNotice from "./main/MiniNotice";
import MenuBox from "./menuBox/MenuBox";
import LabelBar from "./labelBar/LabelBar";

function Main() {
  const forum = useSelector((state) => state?.turn?.turnForum);

  // 스크롤이 50px 이상 내려올경우 true값을 넣어줄 useState
  // const [scroll, setScroll] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll); //clean up
  //   };
  // }, []);

  // const handleScroll = () => {
  //   if (window.scrollY >= 450) {
  //     setScroll(true);
  //     // MenuTool_Ref.current.style.position = "sticky";
  //     // MenuTool_Ref.current.style.left = "60%";
  //     // MenuTool_Ref.current.style.top = "3rem";
  //     // Main_Ref.current.style.height = Left_Ref.current.style.height;
  //     console.log(scroll);
  //   } else if (window.scrollY < 450) {
  //     // Main_Ref.current.style.height = Left_Ref.current.style.height;
  //     // MenuTool_Ref.current.style.position = "relative";
  //     // MenuTool_Ref.current.style.left = "";
  //     // MenuTool_Ref.current.style.top = "0";

  //     setScroll(false);
  //   }
  // };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(turnForum("MAIN_FORUM"));
  }, []);

  return (
    <div className="communityMain-container">
      <div className="communityMain-left">
        <LabelBar forum={forum} />
        <MiniNotice />
        <MiniGeneral />
        <MiniInquiry />
      </div>
    </div>
  );
}

export default Main;
