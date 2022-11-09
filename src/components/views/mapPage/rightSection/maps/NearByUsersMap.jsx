/*global kakao*/

// 마크 위치에 바로 요소 값 띄우기
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import { GET_USERS, POST_LATLNG1 } from "../../../../../config/clientConfig";
import useCoords from "../../../../../hook/useCoords";
import EventMarkerContainer from "./common/EventContainer";
import EventMarkerContainer1 from "./EventContainer1";
import { POST_NEARBYUSERS } from "./../../../../../config/tempClientConfig";
const NearByUsersMap = () => {
  const [UserName, setUserName] = useState([]);
  const [positions, setPositions] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [markers1, setMarkers1] = useState([]);

  const { latitude, longitude, isLoaded } = useCoords();
  //leftSection에서 받아온 redux mapType값
  const [map, setMap] = useState();

  //지도의 위치
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: latitude, lng: longitude },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  });
  useEffect(() => {
    //마커 위치
    axios.get(POST_NEARBYUSERS).then((res) => {
      console.log("near", res.data);
    });
  }, []);
  useEffect(() => {
    setState({
      center: { lat: latitude, lng: longitude },
      isPanto: true,
    });
    let markers = [];
    //더미데이터 markers에 등록
    axios.get(POST_LATLNG1).then((res) => {
      for (var i = 0; i < res.data.LatLng1.length; i++) {
        // @ts-ignore
        markers.push({
          position: {
            lat: res.data.LatLng1[i].latlng.lat,
            lng: res.data.LatLng1[i].latlng.lng,
          },
          content: res.data.LatLng1[i].title,
        });
      }
      setMarkers(markers);
    });
  }, [map, latitude]);

  const defaultMap = () => {
    return (
      <div>
        <Map // 지도를 표시할 Container
          // id="map"
          center={state.center}
          isPanto={state.isPanto}
          style={{
            // 지도의 크기
            width: "100%",
            height: "450px",
            position: "absolute",
          }}
          level={3} // 지도의 확대 레벨
        >
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
          ></MapMarker>
          ;
          {markers.map((marker, index) => (
            <div key={index}>
              <EventMarkerContainer
                key={`EventMarkerContainer-${marker.position.lat}-${marker.position.lng}`}
                position={marker.position}
                index={index}
                content={marker.content}
              />

              {/* 마크 위치에 바로 요소 띄우기 */}
              <CustomOverlayMap position={marker.position}>
                <div className="label" style={{ color: "yellow" }}>
                  <div>{marker.content}1</div>
                </div>
              </CustomOverlayMap>
            </div>
          ))}
        </Map>
      </div>
    );
  };
  return <div>{defaultMap()}</div>;
};

export default NearByUsersMap;
