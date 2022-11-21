import React, { useEffect, useState } from "react";
import useCoords from "../../../../../../hook/useCoords";

function MoveMyLocation(props) {
  const { latitude, longitude, isLoaded } = useCoords();
  const [preState, setPreState] = useState(false);

  const onMyLocation = () => {
    console.log("1");
    if (preState) {
      let lat = Number(latitude);
      let noLat = String(lat + 0.00000001);
      props.setState({
        center: { lat: noLat, lng: longitude },
        isPanto: false,
      });
      setPreState(false);
    } else {
      props.setState({
        center: { lat: latitude, lng: longitude },
        isPanto: false,
      });
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
