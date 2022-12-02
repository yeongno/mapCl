import React, { useEffect } from "react";
import { CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";
import { useDispatch } from "react-redux";
import { onLocation } from "../../../../../../redux/_actions/mapNav/location_action";
import DefaultWindow from "../defaultWindow/DefaultWindow";

function MR_ClickMap(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onLocation(props.onPosition.lat, props.onPosition.lng));
  }, [props]);

  return (
    <div
      style={{
        zIndex: "30",
      }}
    >
      <DefaultWindow setOnPosition={props.setOnPosition} />
    </div>
  );
}

export default MR_ClickMap;
