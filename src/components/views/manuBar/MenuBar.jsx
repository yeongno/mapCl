import React from "react";
import { useDispatch } from "react-redux";
import useCoords from "../../../hook/useCoords";
import {
  turnForum,
  turnMap,
  turnMenu,
} from "../../../redux/_actions/turn_action";
import "../../styles/menuBar/MenuBar.scss";
import Header from "../header/Header";
function ManuBar() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="menuBar-container">
        <div className="menuBar-wrapper">
          <div className="btn-container">
            <div className="btn-wrapper">
              <button
                onClick={() => {
                  dispatch(turnMenu("MAIN_MENU"));
                }}
              >
                MainPage
              </button>
            </div>
            <div className="btn-wrapper">
              <button
                onClick={() => {
                  dispatch(turnMenu("MAP_MENU"));
                  dispatch(turnMap("INTERESTED_MAP"));
                }}
              >
                MapPage
              </button>{" "}
            </div>
            <div className="btn-wrapper">
              <button
                onClick={() => {
                  dispatch(turnMenu("COMMUNITY_MENU"));
                  dispatch(turnForum("GENERAL_FORUM"));
                }}
              >
                커뮤니티
              </button>
            </div>
            <div className="btn-wrapper">
              <button
                onClick={() => {
                  dispatch(turnMenu("TEST_MENU"));
                }}
              >
                Test
              </button>
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
