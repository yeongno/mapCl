import React, { useEffect, useState } from "react";
import { MapMarker } from "react-kakao-maps-sdk";

function MR_Search(props) {
  const [keyMarkers, setKeyMarkers] = useState([]);
  useEffect(() => {
    setKeyMarkers(props.keyMarkers[0]);
  }, [props]);

  return (
    <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
      position={props?.keyMarkers[0]?.position}
      image={{
        src: "https://cdn-icons-png.flaticon.com/512/1301/1301421.png", // 마커이미지의 주소입니다
        size: {
          width: 24,
          height: 35,
        }, // 마커이미지의 크기입니다
      }}
      zIndex="-1"
      clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    >
      {props?.keyMarkers[0]?.content}
    </MapMarker>
  );
}

export default MR_Search;
