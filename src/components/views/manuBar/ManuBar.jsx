import React from "react";
import { useDispatch } from "react-redux";
import { turnMenu } from "../../../redux/_actions/turn_action";

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
        }}
      >
        MapPage
      </button>
    </div>
  );
}

export default ManuBar;
