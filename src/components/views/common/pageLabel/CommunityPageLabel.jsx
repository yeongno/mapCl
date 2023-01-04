import React from "react";
import "../../../styles/header/pageLabel/CommunityPageLabel.scss";

function CommunityPageLabel() {
  return (
    <div className="CommunityPageLabel-container">
      {" "}
      <div className="landingPage-container">
        <div className="MapPageLabel-wrapper">CommunityPage</div>
        <div className="firstCommend-line">
          <span>Let's communicate!</span>
          <br />
          <span>여러 사람들과 소통하여 당신을 알려보세요.</span>
        </div>
      </div>
    </div>
  );
}

export default CommunityPageLabel;
