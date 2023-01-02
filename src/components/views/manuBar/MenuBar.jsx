import React from "react";
import { useDispatch } from "react-redux";
import useCoords from "../../../hook/useCoords";
import {
  turnForum,
  turnMap,
  turnMenu,
} from "../../../redux/_actions/turn_action";
import "../../styles/menuBar/MenuBar.scss";
import BarBlack from "../common/button/BarBlack";
import Header from "../header/Header";
function ManuBar() {
  const dispatch = useDispatch();
  return (
    <div className="menuBar-container">
      <div className="menuBar-wrapper">
        <div className="btn-container">
          <div
            className="btn-wrapper"
            onClick={() => {
              dispatch(turnMenu("MAIN_MENU"));
            }}
          >
            <BarBlack value="MainPage" />
          </div>
          <div
            className="btn-wrapper"
            onClick={() => {
              dispatch(turnMenu("MAP_MENU"));
            }}
          >
            <BarBlack value="MapPage"></BarBlack>
          </div>
          <div
            className="btn-wrapper"
            onClick={() => {
              dispatch(turnMenu("COMMUNITY_MENU"));
            }}
          >
            <BarBlack value="Community"></BarBlack>
          </div>
          <div
            className="btn-wrapper"
            onClick={() => {
              dispatch(turnMenu("TEST_MENU"));
            }}
          >
            <BarBlack value="Test"></BarBlack>
            <div className="panel-container">
              <li>aa</li>
              <li>bb</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManuBar;
