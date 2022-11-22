import React from "react";
import { CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";

function MR_ClickMap(props) {
  console.log(props.onPosition);
  return (
    <div>
      <CustomOverlayMap
        position={{
          lat: props.onPosition.lat,
          lng: props.onPosition.lng,
        }}
      >
        <div>as</div>
      </CustomOverlayMap>
    </div>
  );
}

export default MR_ClickMap;
