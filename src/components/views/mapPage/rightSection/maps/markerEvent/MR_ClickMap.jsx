import React from "react";
import { CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";
import DefaultWindow from "../defaultWindow/DefaultWindow";

function MR_ClickMap(props) {
  console.log(props.onPosition);
  return (
    <div
      style={{
        background: "black",
        zIndex: "30",
        position: "absolute",
      }}
    >
      <DefaultWindow />
    </div>
  );
}

export default MR_ClickMap;
