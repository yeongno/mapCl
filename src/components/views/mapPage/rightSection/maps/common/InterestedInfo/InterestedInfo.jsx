import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useMyInfo from "../../../../../../../hook/useMyInfo";

function InterestedInfo() {
  const myInfo = useMyInfo();
  useEffect(() => {}, []);

  return (
    <div
      style={{
        width: "15rem",
        height: "15rem",
        // position: "absolute",
        zIndex: "30",
      }}
    >
      123213
    </div>
  );
}

export default InterestedInfo;
