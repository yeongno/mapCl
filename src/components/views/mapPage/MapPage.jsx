import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LeftSection from "./leftSection/LeftSection";
import RightSection from "./rightSection/RightSection";
import "../../styles/mapPage/MapPage.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { turnMenu } from "../../../redux/_actions/turn_action";
function MapPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(turnMenu("MAP_MENU"));
  }, []);

  return (
    <div className="landingPage-container">
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
