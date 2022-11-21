import React from "react";
import useCoords from "../../../../../../hook/useCoords";

function MoveMyLocation(props) {
  const { latitude, longitude, isLoaded } = useCoords();

  const onMyLocation = () => {
    props.setState({
      center: { lat: latitude, lng: longitude },
      isPanto: true,
    });
  };
  return (
    <div
      style={{
        position: "absolute",
        zIndex: "21",
        marginTop: "2rem",
        fontWeight: "bold",
        color: "red",
      }}
      onClick={onMyLocation}
    >
      {" "}
      my{" "}
    </div>
  );
}

export default MoveMyLocation;
