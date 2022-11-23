import React from "react";
import FavoriteSection from "./FavoriteSection";
import "../../../../../styles/mapPage/infoWindow/default/DefaultWindow.scss";

function DefaultWindow(props) {
  return (
    <div className="default-container">
      <FavoriteSection setOnPosition={props.setOnPosition} />
    </div>
  );
}

export default DefaultWindow;
