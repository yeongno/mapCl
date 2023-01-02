import axios from "axios";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Axios from "../../../../axios/Axios";
import useCoords from "../../../../hook/useCoords";
import { useMainLocation } from "../../../../hook/useMyInfo";
import "../../../styles/test/Test2.scss";
import BarBlack from "../../common/button/BarBlack";
function Test2() {
  const [mouseOver, setMouseOver] = useState(false);
  const Test_Ref = useRef();
  const Test1_Ref = useRef();
  const onOver = () => {
    setMouseOver(true);
    Test_Ref.current.style.height = "0.5rem";
    // Test_Ref.current.style.width = "100%";
    Test_Ref.current.style.width = "100%";
    Test_Ref.current.style.background = "black";
  };
  const onOut = () => {
    setMouseOver(false);
    Test_Ref.current.style.height = "0.5rem";
    Test_Ref.current.style.width = "0";
    Test_Ref.current.style.background = "yellow";
  };
  return (
    <div>
      <div
        className="test_btn"
        onMouseOver={onOver}
        onMouseOut={onOut}
        ref={Test1_Ref}
      >
        btn
        <div className="Hover_Btn--BarBlack" ref={Test_Ref}></div>
      </div>
      <BarBlack value="aa" />
    </div>
  );
}

export default Test2;
