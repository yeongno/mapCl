import React, { useEffect, useRef, useState } from "react";
import Notice from "./notice/Notice";
import HotPlace from "./rankBaord/HotPlace";
import HotPost from "./rankBaord/HotPost";
import HotTopic from "./rankBaord/HotTopic";
import "../../styles/mainPage/MainPage.scss";
import IntroduceTop from "./introduceTop/IntroduceTop";
import IntroduceLabel from "./introduceTop/IntroduceLabel";

function MainPage() {
  return (
    <div className="MainPage-container">
      {/* <div
        className="background1-wrapper"
        style={{
          backgroundImage: "url(assets/background/images/together.jpg)",
        }}
      > */}
      <img
        className="background1-wrapper"
        src="assets/background/images/together.jpg"
      />{" "}
      <div className="introduceTop-wrapper">
        <div
          className="background-introduceTop"
          style={{
            backgroundImage: "url(assets/background/images/join1.jpg)",
          }}
        >
          <IntroduceTop />
        </div>
      </div>
      <div className="introduceLabel-wrapper">
        <IntroduceLabel />
      </div>
      <div className="landingPage-container">
        <Notice />
        <HotPlace />
        <HotPost />
        <HotTopic />
      </div>
    </div>
  );
}

export default MainPage;
