import React from "react";
import { useSelector } from "react-redux";
import AdPost from "./adPosts/AdPost";

function ActWindow() {
  const actInfoWindow = useSelector((state) => state.turn.turnInfoWindow);
  return <div>{actInfoWindow?.kind == "myAd" && <AdPost />}</div>;
}

export default ActWindow;
