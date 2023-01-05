import React, { useEffect, useRef } from "react";
import "../../../../styles/community/menuBox/AccGeneral.scss";
import AccMenu_Menu from "./accordian_menu/AccMenu_Menu";
function AccGeneral(props) {
  const General_Ref = useRef();

  useEffect(() => {
    if (props.onGener == true) {
      General_Ref.current.style.maxHeight = "30rem";
      General_Ref.current.style.height = "30rem";
      General_Ref.current.style.transition = "all 2s";
    } else {
      General_Ref.current.style.maxHeight = "0";
      General_Ref.current.style.height = "0";
      General_Ref.current.style.transition = "all 0s";
    }
  }, [props.onGener]);

  return (
    <div className="accGeneral-container" ref={General_Ref}>
      <AccMenu_Menu />
      AccGeneral
    </div>
  );
}

export default AccGeneral;
