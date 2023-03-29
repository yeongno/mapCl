import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AdGroup from "./AdGroup";
import FavoriteGroup from "./FavoriteGroup";
import PostGroup from "./PostGroup";

function MineMO() {
  const [accActive, setAccActive] = useState(true);
  useEffect(() => {
    setAccActive(false);
    console.log(accActive);
  }, [accActive]);

  return (
    <div className="leftSection-btnContainer">
      <FavoriteGroup setAccActive={setAccActive} accActive={accActive} />
      <PostGroup setAccActive={setAccActive} accActive={accActive} />
      <AdGroup setAccActive={setAccActive} accActive={accActive} />
    </div>
  );
}

export default MineMO;
