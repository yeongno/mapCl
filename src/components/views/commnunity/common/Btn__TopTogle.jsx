import { UpSquareOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";

function Btn__TopTogle() {
  const TopTogle_Ref = useRef();
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
      TopTogle_Ref.current.style.opacity = "1";

      console.log(scroll);
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      TopTogle_Ref.current.style.opacity = "0";

      setScroll(false);
    }
  };
  const onTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      ref={TopTogle_Ref}
      onClick={onTop}
      style={{
        position: "fixed",
        marginLeft: "120vh",
        marginTop: "50vh",
        fontSize: "3em",
        cursor: "pointer",
        zIndex: "110",
        opacity: "0",
        transition: "1s",
      }}
    >
      <UpSquareOutlined />
    </div>
  );
}

export default Btn__TopTogle;
