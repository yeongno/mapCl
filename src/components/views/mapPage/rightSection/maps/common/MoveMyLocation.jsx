import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useCoords from "../../../../../../hook/useCoords";
import { useMainLocation } from "../../../../../../hook/useMyInfo";
import { setMainLocation } from "../../../../../../redux/_actions/mapNav/location_action";

function MoveMyLocation(props) {
  const dispatch = useDispatch();
  const mainLocation_reducer = useMainLocation();
  const { latitude, longitude, isLoaded } = useCoords();
  const [preState, setPreState] = useState(false);

  const onMyLocation = () => {
    if (preState) {
      let lat = Number(latitude);
      let noLat = String(lat + 0.00000001);
      dispatch(
        setMainLocation({
          center: { lat: noLat, lng: longitude },
          isPanto: false,
        })
      );
      setPreState(false);
    } else {
      dispatch(
        setMainLocation({
          center: { lat: latitude, lng: longitude },
          isPanto: false,
        })
      );
      setPreState(true);
    }
  };

  return (
    <button
      style={{
        position: "absolute",
        zIndex: "21",
        marginTop: "2rem",
        fontWeight: "bold",
        color: "red",
      }}
      onClick={onMyLocation}
    >
      {latitude} {longitude}
      my{" "}
    </button>
  );
}

export default MoveMyLocation;
