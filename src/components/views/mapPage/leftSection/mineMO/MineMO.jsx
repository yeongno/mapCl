import React from "react";
import AdGroup from "../FavoriteGroup/AdGroup";
import FavoriteGroup from "../FavoriteGroup/FavoriteGroup";
import PostGroup from "../FavoriteGroup/PostGroup";

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
