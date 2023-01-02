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
    <>
      <div className="menuBar-container">
        <div className="menuBar-wrapper">
          <div className="btn-container">
            <div className="btn-wrapper">
              <BarBlack
                onClick={() => {
                  dispatch(turnMenu("MAIN_MENU"));
                }}
                value="MainPage"
              />
            </div>
            <div className="btn-wrapper">
              <BarBlack
                onClick={() => {
                  dispatch(turnMenu("MAIN_MENU"));
                }}
                value="MapPage"
              ></BarBlack>
            </div>
            <div className="btn-wrapper">
              <BarBlack
                onClick={() => {
                  dispatch(turnMenu("MAIN_MENU"));
                }}
                value="Community"
              ></BarBlack>
            </div>
            <div className="btn-wrapper">
              <BarBlack
                onClick={() => {
                  dispatch(turnMenu("MAIN_MENU"));
                }}
                value="Test"
              ></BarBlack>
              <div className="panel-container">
                <li>aa</li>
                <li>bb</li>
              </div>
            </div>

            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default ManuBar;
