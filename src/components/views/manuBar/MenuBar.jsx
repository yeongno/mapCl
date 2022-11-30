import React from "react";
import { useDispatch } from "react-redux";
import {
  turnForum,
  turnMap,
  turnMenu,
} from "../../../redux/_actions/turn_action";

function ManuBar() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(turnMenu("MAIN_MENU"));
        }}
      >
        MainPage
      </button>
      <button
        onClick={() => {
          dispatch(turnMenu("MAP_MENU"));
          dispatch(turnMap("INTERESTED_MAP"));
        }}
      >
        MapPage
      </button>
      <button
        onClick={() => {
          dispatch(turnMenu("COMMUNITY_MENU"));
          dispatch(turnForum("GENERAL_FORUM"));
        }}
      >
        커뮤니티
      </button>
    </div>
  );
}

export default ManuBar;
