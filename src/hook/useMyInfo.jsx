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

export function useMyFavoriteLocation() {
  const location = useSelector((state) => state.location.location);

  return location;
}

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
export function usePreCenter() {
  const location = useSelector((state) => state.location.prelocation);

  return location;
}
export function useMainLocation() {
  const location = useSelector((state) => state.location.mainlocation);

  return location;
}
export function useGeoLocation() {
  const location = useSelector((state) => state.location.geolocation);

  return location;
}

export function usePost() {
  const post = useSelector((state) => state?.post?.posts);

  return post;
}

export function useNoticePost() {
  const post = useSelector((state) => state?.post?.postsNotice);

  return post;
}

export function useInquiryPost() {
  const post = useSelector((state) => state?.post?.postsInquiry);

  return post;
}
