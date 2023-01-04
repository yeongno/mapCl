import React, { useEffect, useRef, useState } from "react";
import "../../../styles/mainPage/IntroduceEx.scss";
function IntroduceEx() {
  const Introduce_Ref = useRef();
  const FirstLine_Ref = useRef();
  const SecondLine_Ref = useRef();
  const ThirdLine_Ref = useRef();
  const FourLine_Ref = useRef();

  // 스크롤이 50px 이상 내려올경우 true값을 넣어줄 useState
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 50) {
      setScroll(true);
      Introduce_Ref.current.style.opacity = "1";
      FirstLine_Ref.current.style.transform = "translate(5rem, 0)";
      SecondLine_Ref.current.style.transform = "translate(0, 2rem)";
      ThirdLine_Ref.current.style.transform = "translate(0, -2rem)";
      FourLine_Ref.current.style.transform = "translate(0, -2rem)";
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      Introduce_Ref.current.style.opacity = "0";
      FirstLine_Ref.current.style.transform = "translate(-5rem, 0)";
      SecondLine_Ref.current.style.transform = "translate(0, -1rem)";
      ThirdLine_Ref.current.style.transform = "translate(0, 2rem)";
      FourLine_Ref.current.style.transform = "translate(0, 2rem)";

      setScroll(false);
    }
  };
  return (
    <div className="landingPage-container">
      <div className="introduce-Ex" ref={Introduce_Ref}>
        <div className="firstLine-wrapper" ref={FirstLine_Ref}>
          CHACHAGO
        </div>
        <div className="secondLine-wrapper" ref={SecondLine_Ref}>
          About Us
        </div>
        <div className="thirdLine-wrapper" ref={ThirdLine_Ref}>
          "새로운 나를 발견 할 수 있는 또 하나의 공간"
        </div>
        <div className="fourLine-wrapper" ref={FourLine_Ref}>
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
