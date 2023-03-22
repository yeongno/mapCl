//맵 클릭 시 띄워지는 인포윈도우 바깥 쪽 여백에 클릭이 안되게 하기 위한 컴포넌트
import React from "react";

function MapBlinder() {
  return (
    <div
      style={{
        zIndex: "29",
        background: "gray",
        width: "100%",
        height: "100%",
        position: "absolute",
        opacity: "0.5",
      }}
    ></div>
  );
}

export default MapBlinder;
