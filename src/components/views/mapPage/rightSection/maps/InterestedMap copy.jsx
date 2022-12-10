import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import useCoords from "../../../../../hook/useCoords";
import { GET_MYUSERINFO } from "./../../../../../config/tempClientConfig";
import MR_Interested from "./common/MR_Interested";
import useMyInfo, { useLocationInfo } from "../../../../../hook/useMyInfo";
import SearchBar from "./common/SearchBar";
import MR_Search from "./markerEvent/MR_Search";
import MR_MyLocation from "./markerEvent/MR_MyLocation";
import MoveMyLocation from "./common/MoveMyLocation";
import MR_ClickMap from "./markerEvent/MR_ClickMap";
import MapBlinder from "./common/MapBlinder";
import { useDispatch, useSelector } from "react-redux";
import { setCenterLocation } from "../../../../../redux/_actions/mapNav/location_action";
import useNearByUsers from "../../../../../hook/useNearByUsers";
import useLocationFormat from "../../../../../hook/formatter/useLocationFormat";
import MR_NearByUsers from "./markerEvent/MR_NearByUsers";
const InterestedMap = (props) => {
  const dispatch = useDispatch();
  const [markers, setMarkers] = useState([]);

  const nearUser = useNearByUsers();

  //nerByUsers
  const [userMarkers, setUserMarkers] = useState([]);
  const { latitude, longitude, isLoaded } = useCoords();
  //키워드 마커
  const [keyMarkers, setKeyMarkers] = useState();
  const [onPosition, setOnPosition] = useState();
  //현재 실제 위치
  const location = useLocationInfo();
  const MyInfo = useMyInfo();

  //지도의 위치
  const [state, setState] = useState({
    // 지도의 초기 중심 위치
    center: { lat: "33.450936", lng: "126.569477" },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  });
  useEffect(() => {
    console.log(props.latitude1, props.longitude1);
    dispatch(
      setCenterLocation({ lat: props.latitude1, lng: props.longitude1 })
    );

    setState({
      center: { lat: props.latitude1, lng: props.longitude1 },
      // 지도 위치 변경시 panto를 이용할지에 대해서 정의
      isPanto: false,
    });
  }, [props.latitude1]);

  //현재 맵 중심 정보
  const [preCenter, setPreCenter] = useState({
    center: {
      lat: latitude,
      lng: longitude,
    },
  });

  //지도 중심좌표가 움직인 정도를 알기 위한 값
  const [tmpCenter, setTmpCenter] = useState({
    center: {
      lat: latitude,
      lng: longitude,
    },
  });
  //설정 값만큼 움직였을 경우 데이터를 불러오기 위한 플래그 값
  const [onChanged, setOnChanged] = useState(0);

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

  useEffect(() => {
    if (onChanged === 0 && latitude) {
      setTmpCenter({
        center: {
          lat: latitude,
          lng: longitude,
        },
      });
      setOnChanged(onChanged + 1);
    }
    //약 150미터
    let mem = 0.00165628926738;

    //위도 변경 약 400미터 마다 업데이트
    if (
      preCenter.center.lat >= tmpCenter.center.lat + mem ||
      preCenter.center.lat <= tmpCenter.center.lat - mem
    ) {
      setOnChanged(onChanged + 1);
      setTmpCenter({
        center: {
          lat: preCenter.center.lat,
          lng: preCenter.center.lng,
        },
      });
    }
    //경도 변경 약 400미터 마다 업데이트
    if (
      preCenter.center.lng >= tmpCenter.center.lng + mem ||
      preCenter.center.lng <= tmpCenter.center.lng - mem
    ) {
      dispatch(setCenterLocation(tmpCenter));
      setOnChanged(onChanged + 1);
      console.log(onChanged);
      setTmpCenter({
        center: {
          lat: preCenter.center.lat,
          lng: preCenter.center.lng,
        },
      });
    }
  }, [latitude, preCenter]);

  //tmpCenter 업데이트 되면 선호 지역 데이터 불러옴
  useEffect(() => {
    let markers = [];
    //더미데이터 markers에 등록
    axios.get(GET_MYUSERINFO).then((res) => {
      for (var i = 0; i < res.data.user[0].priority.length - 1; i++) {
        markers.push({
          position: {
            lat: res.data.user[0].priority[i].lat,
            lng: res.data.user[0].priority[i].lng,
          },
        });
      }
      setMarkers(markers);
    });

    let userMarkers = [];
    //더미데이터 markers에 등록
    if (nearUser) {
      for (var i = 0; i < 5; i++) {
        if (nearUser.data?.[i]?.location) {
          var [left, right] = nearUser.data?.[i]?.location.split("(");
          var [left1, right1] = right.split(")");
          var [left2, right2] = left1.split(" ");
          userMarkers.push({
            position: {
              lat: left2,
              lng: right2,
            },
          });
        } else {
          userMarkers.push({
            position: {
              lat: null,
              lng: null,
            },
          });
        }

        setUserMarkers(userMarkers);
      }
    }
  }, [onChanged]);

  return (
    <div>
      <SearchBar setState={setState} setKeyMarkers={setKeyMarkers} />
      <MoveMyLocation setState={setState} />
      {onPosition && (
        //지도 클릭
        <div style={{ width: "53%", height: "30rem", position: "absolute" }}>
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
        {markers.map((marker, index) => (
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
        {userMarkers.map((userMarkers, index) => (
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
