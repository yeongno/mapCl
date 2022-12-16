import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import useCoords from "../../../../../hook/useCoords";
import { GET_MYUSERINFO } from "./../../../../../config/tempClientConfig";
import MR_Interested from "./common/MR_Interested";
import useMyInfo, {
  useLocationInfo,
  useMainLocation,
} from "../../../../../hook/useMyInfo";
import SearchBar from "./common/SearchBar";
import MR_Search from "./markerEvent/MR_Search";
import MR_MyLocation from "./markerEvent/MR_MyLocation";
import MoveMyLocation from "./common/MoveMyLocation";
import MR_ClickMap from "./markerEvent/MR_ClickMap";
import MapBlinder from "./common/MapBlinder";
import { useDispatch, useSelector } from "react-redux";
import {
  setCenterLocation,
  setPreLocation,
} from "../../../../../redux/_actions/mapNav/location_action";
import useNearByUsers from "../../../../../hook/useNearByUsers";
import useLocationFormat from "../../../../../hook/formatter/useLocationFormat";
import MR_NearByUsers from "./markerEvent/MR_NearByUsers";
import useTmpCenter from "../../../../../hook/common/useTmpCenter";
const InterestedMap = (props) => {
  //위치 이동 시 이벤트 호출 및 마커 생성
  const getMarkers = useTmpCenter();
  const dispatch = useDispatch();
  const { latitude, longitude, isLoaded } = useCoords();
  //키워드 마커
  const [keyMarkers, setKeyMarkers] = useState();
  const [onPosition, setOnPosition] = useState();
  //현재 실제 위치
  const location = useLocationInfo();

  //지도의 위치
  const [state, setState] = useState({
    // 지도의 초기 중심 위치
    center: { lat: "33.450936", lng: "126.569477" },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  });
  useEffect(() => {
    setState({
      center: { lat: props.latitude1, lng: props.longitude1 },
      // 지도 위치 변경시 panto를 이용할지에 대해서 정의
      isPanto: false,
    });
  }, [props.latitude1]);

  //이벤트 발생 마다 현재 위치 값 셋팅 해줌
  const mainLocation = useMainLocation();
  useEffect(() => {
    setState(mainLocation);
  }, [mainLocation]);

  //현재 맵 중심 정보
  const [preCenter, setPreCenter] = useState({
    center: {
      lat: latitude,
      lng: longitude,
    },
  });

  //현재 중심 값 리덕스 세팅
  useEffect(() => {
    dispatch(setPreLocation(preCenter));
  }, [preCenter]);

  //  선호 지역 클릭 시 현재 위치 이동
  useEffect(() => {
    setState({
      center: {
        lat: location?.lat,
        lng: location?.lng,
      },
    });
  }, [location]);

  //todo 추후에 redux로 내 위치 값 가져와서 지정 usecoords 훅 사용 예정
  useEffect(() => {
    if (!latitude) {
      setState({
        center: { lat: latitude + 0.000001, lng: longitude },
        isPanto: false,
      });
    } else {
      setState({
        center: { lat: props.latitude1, lng: props.longitude1 },
        // 지도 위치 변경시 panto를 이용할지에 대해서 정의
        isPanto: false,
      });
    }
  }, []);

  return (
    <div>
      <SearchBar setState={setState} setKeyMarkers={setKeyMarkers} />
      <MoveMyLocation setState={setState} />
      {onPosition && (
        //지도 클릭
        <div style={{ width: "100%", height: "30rem", position: "absolute" }}>
          <MR_ClickMap onPosition={onPosition} setOnPosition={setOnPosition} />
          <MapBlinder />
        </div>
      )}
      <Map // 지도를 표시할 Container
        // id="map"
        center={state.center}
        // isPanto={state.isPanto}
        style={{
          // 지도의 크기
          width: "100%",
          height: "30rem",
          position: "relative",
        }}
        onClick={(_t, mouseEvent) =>
          setOnPosition({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
          })
        }
        level={3} // 지도의 확대 레벨
        onCenterChanged={(map) =>
          setPreCenter({
            level: map.getLevel(),
            center: {
              lat: map.getCenter().getLat(),
              lng: map.getCenter().getLng(),
            },
          })
        }
      >
        {preCenter && (
          //내 위치 마커
          <MR_MyLocation
            latitude={latitude}
            longitude={longitude}
            setState={setState}
          />
        )}
        {keyMarkers && (
          //검색 마커
          <MR_Search keyMarkers={keyMarkers} />
        )}
        {getMarkers.markers.map((marker, index) => (
          <div key={index}>
            <MR_Interested
              key={`EventMarkerContainer-${marker.position.lat}-${marker.position.lng}`}
              position={marker.position}
              index={index}
              content={marker.content}
            />

            {/* 마크 위치에 바로 요소 띄우기 */}
            <CustomOverlayMap position={marker.position}>
              <div className="label" style={{ color: "black" }}>
                <div>{index + 1}</div>
              </div>
            </CustomOverlayMap>
          </div>
        ))}
        {getMarkers.userMarkers.map((userMarkers, index) => (
          <div key={index}>
            <MR_NearByUsers
              // key={`EventMarkerContainer-${marker.position.lat}-${marker.position.lng}`}
              position={userMarkers?.position}
              index={index}
            />

            {/* 마크 위치에 바로 요소 띄우기 */}
            <CustomOverlayMap position={userMarkers?.position}>
              <div className="label" style={{ color: "black" }}>
                <div>near{index + 1}</div>
              </div>
            </CustomOverlayMap>
          </div>
        ))}
      </Map>
    </div>
  );
};

export default InterestedMap;
