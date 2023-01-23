import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LeftSection from "./leftSection/LeftSection";
import RightSection from "./rightSection/RightSection";
import "../../styles/mapPage/MapPage.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { turnMenu } from "../../../redux/_actions/turn_action";
import Btn__TopTogle from "../commnunity/common/Btn__TopTogle";
import useStartingtoUP from "../../../hook/common/useStartingtoUP.jsx";
function MapPage() {
  useStartingtoUP();
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //   });
  // }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(turnMenu("MAP_MENU"));
  }, []);

  return (
    <div className="landingPage-container">
      <Btn__TopTogle />
      <div className="body-container">
        <div className="body-leftSection">
          <LeftSection />
        </div>
        <div className="body-rightSection">
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default MapPage;
