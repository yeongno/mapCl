import { LeftCircleFilled } from "@ant-design/icons";
import React, { useRef, useState } from "react";
import "../../../styles/common/button/BarBlack.scss";
function BarBlack(props) {
  const [mouseOver, setMouseOver] = useState(false);
  const Button_Ref = useRef();
  const onOver = () => {
    setMouseOver(true);
    if (mouseOver == false) Button_Ref.current.style.width = "100%";
    // Button_Ref.current.style.background = "black";
  };
  const onOut = () => {
    setMouseOver(false);
    if (mouseOver == true) Button_Ref.current.style.width = "0";
    // Button_Ref.current.style.background = "yellow";
  };
  return (
    <div>
      <div className="BarBlack_btn" onMouseOver={onOver} onMouseOut={onOut}>
        {props.value}
        <div className="Hover_Btn--BarBlack" ref={Button_Ref}></div>
      </div>
    </div>
  );
}

export default BarBlack;
