import React from "react";
import { useDispatch } from "react-redux";
import { turnMenu } from "../../../redux/_actions/turn_action";

function Logo() {
  const dispatch = useDispatch();
  const onMain = () => {
    dispatch(turnMenu("MAIN_MENU"));
  };
  return (
    <div
      style={{ fontWeight: "bold", fontSize: "4em", cursor: "pointer" }}
      onClick={onMain}
    >
      CHACHAGO
    </div>
  );
}
export default Logo;
