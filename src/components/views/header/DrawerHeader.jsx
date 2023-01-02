import React, { useEffect, useRef, useState } from "react";

function DrawerHeader() {
  const Test_Ref = useRef();

  // 스크롤이 50px 이상 내려올경우 true값을 넣어줄 useState
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(window.scrollY);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY > 230) {
      setScroll(true);
      Test_Ref.current.style.position = "sticky";
    } else if (window.scrollY < 200) {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
      Test_Ref.current.style.position = "absolute";
      //   Test_Ref.current.style.maxHeight = "100%";
    }
  };
  return (
    <div
      className="test1"
      style={{
        position: "absolute",
        width: "100vw",
        height: "2rem",
        background: "yellow",
        top: "0",
        zIndex: "900",
      }}
      ref={Test_Ref}
    >
      a
    </div>
  );
}

export default DrawerHeader;
