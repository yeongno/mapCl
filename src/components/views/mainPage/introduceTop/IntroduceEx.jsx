import React, { useEffect, useRef, useState } from "react";
import "../../../styles/mainPage/IntroduceEx.scss";
function IntroduceEx() {
  return (
    <div className="landingPage-container">
      <div className="introduce-Ex">
        <div className="firstLine-wrapper">CHACHAGO</div>
        <div className="secondLine-wrapper">About Us</div>
        <div className="thirdLine-wrapper">
          "새로운 나를 발견 할 수 있는 또 하나의 공간"
        </div>
        <div className="fourLine-wrapper">
          위치기반으로 원하는 위치의 어떤 사람들과도 새로운 인연을 만들 수
          있습니다.
          <br />
          망설이지 말고 나아가 더 나은 당신을 만나세요.
          <br />
          저희 ChaChaGo는 언제나 그런 당신을 응원합니다.
        </div>
      </div>
    </div>
  );
}

export default IntroduceEx;
