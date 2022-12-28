import React, { useEffect, useRef, useState } from "react";
import "../../../styles/mainPage/IntroduceComment.scss";
function IntroduceTop() {
  const Comment_Ref = useRef();
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
    if (window.scrollY <= 50) {
      setScroll(true);
      Comment_Ref.current.style.opacity = "1";

      console.log(scroll);
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      Comment_Ref.current.style.opacity = "0";

      setScroll(false);
    }
  };
  return (
    <div className="landingPage-container">
      <div className="introduce-comment" ref={Comment_Ref}>
        <div className="firstLine-wrapper">새로운 인연과</div>
        <div className="secondLine-wrapper">새로운 나를 찾아서</div>
      </div>
    </div>
  );
}

export default IntroduceTop;
