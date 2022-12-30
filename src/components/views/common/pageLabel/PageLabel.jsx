import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MainPageLabel from "./MainPageLabel";
import MapPageLabel from "./MapPageLabel";

function PageLabel() {
  const menu = useSelector((state) => state?.turn?.turnMenu);

  //todo hook selector로 전환하여 컴포넌트 반환 할 수 있게 할 것
  return (
    <div>
      {(menu == "MAIN_MENU" && <MainPageLabel />) || <></>}
      {(menu == "MAP_MENU" && <MapPageLabel />) || <></>}
      {(menu == "COMMUNITY_MENU" && <MainPageLabel />) || <></>}
    </div>
  );
}

export default PageLabel;
