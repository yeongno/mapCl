import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import useCoords from "../../../../../hook/useCoords";
import { GET_MYUSERINFO } from "./../../../../../config/tempClientConfig";
import MR_Interested from "./common/MR_Interested";
import useMyInfo, {
  useAdLoacationInfo,
  useLocationInfo,
  useMainLocation,
  useMapCover,
  usePostLocationInfo,
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
import MapCover from "./common/MapCover";
import MR_MyPosts from "./markerEvent/MR_MyPosts";
import MR_MyAds from "./markerEvent/MR_MyAds";
import RadioMark from "./common/RadioMark";
import useMarkFilterSelector from "../../../../../hook/mapPage/useMarkFilterSelector";
const InterestedMap = (props) => {
  //위치 이동 시 이벤트 호출 및 마커 생성
  const getMarkers = useTmpCenter();
  const dispatch = useDispatch();
  const { latitude, longitude, isLoaded } = useCoords();
  //키워드 마커
  const [keyMarkers, setKeyMarkers] = useState();
  const [onPosition, setOnPosition] = useState();

  //MapNav favoriteGroup 마크 위치
  const location = useLocationInfo();

  //MapNav postGroup 마크 위치
  const postLocation = usePostLocationInfo();

  //MapNav adGroup 마크 위치
  const adLoacation = useAdLoacationInfo();

  //맵 커버 온오프하며 useTmpCenter의 onChanged 값으로 값 지정
  const mapCover = useMapCover();

  //mark 필터 관리
  const markFilter = useMarkFilterSelector();
  const { favorite, post, ad } = markFilter;

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

  // postGroup 클릭 시 현재 위치 이동
  useEffect(() => {
    setState({
      center: {
        lat: postLocation?.lat,
        lng: postLocation?.lng,
      },
    });
  }, [postLocation]);

  // adGroup 클릭 시 현재 위치 이동
  useEffect(() => {
    setState({
      center: {
        lat: adLoacation?.lat,
        lng: adLoacation?.lng,
      },
    });
  }, [adLoacation]);

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
      <RadioMark />
      <SearchBar setState={setState} setKeyMarkers={setKeyMarkers} />
      <MoveMyLocation setState={setState} />
      {mapCover && <MapCover />}
      {onPosition && mapCover == false ? (
        //지도 클릭
        <div style={{ width: "100%", height: "30rem", position: "absolute" }}>
          <MapBlinder />
          <MR_ClickMap onPosition={onPosition} setOnPosition={setOnPosition} />
        </div>
      ) : (
        <></>
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
        level={4} // 지도의 확대 레벨
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
        {/* 나의 글  */}
        {getMarkers.myPostsMarkers.map((myPostsMarkers, index) => (
          <div key={index}>
            {post && (
              <div key={index}>
                <MR_MyPosts
                  key={`EventMarkerContainer-${myPostsMarkers.position.lat}-${myPostsMarkers.position.lng}`}
                  position={myPostsMarkers.position}
                  index={index}
                  content={myPostsMarkers.content}
                />

                {/* 마크 위치에 바로 요소 띄우기 */}
                <CustomOverlayMap position={myPostsMarkers.position}>
                  <div className="label" style={{ color: "black" }}>
                    <div>{index + 11}</div>
                  </div>
                </CustomOverlayMap>
              </div>
            )}
          </div>
        ))}
        {/* 나의 모집 글  */}
        {getMarkers.myAdsMarkers.map((myAdsMarkers, index) => (
          <div key={index}>
            {ad && (
              <div key={index}>
                <MR_MyAds
                  key={`EventMarkerContainer-${myAdsMarkers.position.lat}-${myAdsMarkers.position.lng}`}
                  position={myAdsMarkers.position}
                  index={index}
                  content={myAdsMarkers.content}
                />

                {/* 마크 위치에 바로 요소 띄우기 */}
                <CustomOverlayMap position={myAdsMarkers.position}>
                  <div className="label" style={{ color: "black" }}>
                    <div>{index + 11}</div>
                  </div>
                </CustomOverlayMap>
              </div>
            )}
          </div>
        ))}
        {/* 선호 지역 */}
        {getMarkers.markers.map((marker, index) => (
          <div key={index}>
            {favorite && (
              <div key={index}>
                <MR_Interested
                  key={`EventMarkerContainer-${marker.position.lat}-${marker.position.lng}`}
                  position={marker.position}
                  index={index}
                  content={marker.content}
                />

                {/* 마크 위치에 바로 요소 띄우기 */}
                <CustomOverlayMap position={marker.position}>
                  <div
                    className="label"
                    style={{
                      color: "black",
                    }}
                  >
                    <div>{index + 1}</div>
                  </div>
                </CustomOverlayMap>
              </div>
            )}
          </div>
        ))}
        {getMarkers.userMarkers.map((userMarkers, index) => (
          <div key={index}>
            {/*
            todo
            1. 특정 플래그 값을 userMarkers에서 가져와 나의 마크와 전체 마크를 구분 해준다. */}
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
