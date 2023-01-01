import React from "react";
import "../../../styles/header/pageLabel/MapPageLabel.scss";

function MapPageLabel() {
  return (
    <div className="MapPageLabel-container">
      {" "}
      <div className="landingPage-container">
        <div className="MapPageLabel-wrapper">MapPage</div>
        <div className="firstCommend-line">
          <span>Let's connect you to everyThing!</span>
          <br />
          <span>주변의 사람들과 인연들 만들고 당신만의 취미를 발견하세요.</span>
        </div>
      </div>
    </div>
  );
}

export default MapPageLabel;
