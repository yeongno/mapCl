import { useEffect, useState } from "react";
import { MapMarker } from "react-kakao-maps-sdk";
import useCoords from "../../../../../../hook/useCoords";
import { useLocationInfo } from "../../../../../../hook/useMyInfo";

function MR_MyLocation(props) {
  //현재 실제 위치
  const { latitude, longitude, isLoaded } = useCoords();
  const [nowLatitude, setNowLatitude] = useState();
  const [nowLongitude, setNowLongitude] = useState();
  useEffect(() => {
    setNowLatitude(latitude);
    setNowLongitude(longitude);
  }, [latitude]);

  return (
    <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
      position={{
        lat: latitude,
        lng: longitude,
      }}
      image={{
        src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
        size: {
          width: 24,
          height: 35,
        }, // 마커이미지의 크기입니다
      }}
      zIndex="-1"
      clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    >
      내 위치
    </MapMarker>
  );
}

export default MR_MyLocation;
