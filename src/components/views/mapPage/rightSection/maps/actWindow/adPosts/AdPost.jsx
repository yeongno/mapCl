import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { turnInfoWindow } from "../../../../../../../redux/_actions/turn_action";

function AdPost() {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.turn.turnInfoWindow.content);
  return (
    <div
      style={{
        position: "absolute",
        zIndex: "30",
        height: "95%",
        width: "95%",
        background: "white",
        marginLeft: "2.5%",
        marginTop: "1%",
      }}
    >
      <div style={{ minWidth: "150px", zIndex: "30" }}>
        <img
          alt="close"
          width="14"
          height="13"
          src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
          style={{
            position: "absolute",
            right: "5px",
            top: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            dispatch(turnInfoWindow({ act: false, kind: "", content: "" }));
          }}
        />
      </div>
      {content.title}
      <br />
      {content.content}
    </div>
  );
}

export default AdPost;
