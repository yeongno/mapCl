import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useMyInfo from "../../../../../../../hook/useMyInfo";

function InterestedInfo() {
  const myInfo = useMyInfo();
  useEffect(() => {
    console.log("myUserInfo", myInfo);
  }, []);

  return <div>123</div>;
}

export default InterestedInfo;
