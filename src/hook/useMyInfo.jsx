import React from "react";
import { useSelector } from "react-redux";

function useMyInfo() {
  const myUserInfo = useSelector((state) => state.user.userData.user);

  return myUserInfo;
}

export default useMyInfo;
