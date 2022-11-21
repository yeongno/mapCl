import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import { GET_USERS, POST_LATLNG1 } from "../../../../../config/clientConfig";
import useCoords from "../../../../../hook/useCoords";
import EventMarkerContainer from "./common/EventContainer";
import { POST_NEARBYUSERS } from "./../../../../../config/tempClientConfig";
const NearByUsersMap = () => {
  const [markers, setMarkers] = useState([]);

  //현재 실제 위치
  const { latitude, longitude, isLoaded } = useCoords();

  //지도의 위치
  const [state, setState] = useState({
    // 지도의 초기 중심 위치
    center: { lat: latitude, lng: longitude },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  });

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

  useEffect(() => {
    //초기 중심 위치 설정
    setState({
      center: { lat: latitude, lng: longitude },
      isPanto: true,
    });

    //현재 위치 값을 설정한 훅이 초기 값이 바로 설정이 안됨으로 임의로 초기 값 설정
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
      setOnChanged(onChanged + 1);
      setTmpCenter({
        center: {
          lat: preCenter.center.lat,
          lng: preCenter.center.lng,
        },
      });
    }
  }, [latitude, preCenter]);

  //tmpCenter 업데이트 되면 데이터 불러옴
  useEffect(() => {
    let markers = [];
    //더미데이터 markers에 등록
    axios.get(POST_NEARBYUSERS).then((res) => {
      for (var i = 0; i < res.data.list.length; i++) {
        // @ts-ignore
        markers.push({
          position: {
            lat: res.data.list[i].location[0].lat,
            lng: res.data.list[i].location[0].lng,
          },
        });
      }
      setMarkers(markers);
    });
  }, [onChanged]);

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
                  <div>{marker.content}</div>
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
