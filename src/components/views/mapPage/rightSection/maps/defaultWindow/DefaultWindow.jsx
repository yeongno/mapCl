import React, { useState } from "react";
import FavoriteSection from "./FavoriteSection";
import "../../../../../styles/mapPage/infoWindow/default/DefaultWindow.scss";
import NavMode from "./NavMode";
import Group from "./Group";
import Posting from "./Posting";
import { CloseOutlined } from "@ant-design/icons";

function DefaultWindow(props) {
  const [mode, setMode] = useState("Group");
  return (
    <div className="default-container">
      <div className="topLabel-container">
        <div className="label-container">글 작성 및 선호지역 등록</div>
        <div
          className="btn--close"
          onClick={() => {
            props.setOnPosition(null);
          }}
        >
          <CloseOutlined />
        </div>
      </div>
      <NavMode setMode={setMode} />
      {mode === "Group" && <Group />}
      {mode === "Write" && <Posting />}
      {mode === "Favorite" && (
        <FavoriteSection setOnPosition={props.setOnPosition} />
      )}
    </div>
  );
}

export default DefaultWindow;
