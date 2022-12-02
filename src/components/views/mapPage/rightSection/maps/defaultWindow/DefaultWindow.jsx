import React, { useState } from "react";
import FavoriteSection from "./FavoriteSection";
import "../../../../../styles/mapPage/infoWindow/default/DefaultWindow.scss";
import NavMode from "./NavMode";
import Group from "./Group";
import Posting from "./Posting";

function DefaultWindow(props) {
  const [mode, setMode] = useState("Group");
  return (
    <div className="default-container">
      <FavoriteSection setOnPosition={props.setOnPosition} />
      <NavMode setMode={setMode} />
      {mode === "Group" && <Group />}
      {mode === "Write" && <Posting />}
    </div>
  );
}

export default DefaultWindow;
