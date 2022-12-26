import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Axios from "../../../../axios/Axios";
import useCoords from "../../../../hook/useCoords";
import { useMainLocation } from "../../../../hook/useMyInfo";
import "../../../styles/mapPage/infoWindow/default/cover/MapCover.scss";
function Test2() {
  const [test1, setTest1] = useState();
  const onTest = () => {
    alert("aa");
  };
  return (
    <div>
      <div onClick={onTest} style={{ position: "absolute" }}>
        button
      </div>
      <div className="mapCover-container">
        <div className="image-container">
          <img src="/assets/mouse/movingCursor.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Test2;
