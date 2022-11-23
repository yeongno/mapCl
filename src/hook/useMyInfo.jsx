import React from "react";
import { useSelector } from "react-redux";

/**
 *  const myUserInfo = useSelector((state) => state.user.userData.user);
 * @returns
 */
function useMyInfo() {
  const myUserInfo = useSelector((state) => state?.user?.userData?.user);

  return myUserInfo;
}

export default useMyInfo;

export function useLocationInfo() {
  const location = useSelector((state) => state.location.location);

  return location;
}

export function useMyPriority() {
  const location = useSelector(
    (state) => state?.user?.userData?.user[0].priority
  );

  return location;
}
