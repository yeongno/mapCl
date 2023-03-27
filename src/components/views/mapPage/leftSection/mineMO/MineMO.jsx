import React from "react";
import AdGroup from "./AdGroup";
import FavoriteGroup from "./FavoriteGroup";
import PostGroup from "./PostGroup";

function MineMO() {
  return (
    <div className="leftSection-btnContainer">
      <FavoriteGroup />
      <PostGroup />
      <AdGroup />
    </div>
  );
}

export default MineMO;
