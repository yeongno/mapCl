/*global kakao*/

//더미데이터를 가져와 여러 마크 이벤트 처리. click, hover
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import { GET_USERS, POST_LATLNG, POST_LATLNG1 } from "../../../config/clientConfig";
const Map3 = () => {
    const [UserName, setUserName] = useState([]);
    const [LatLng, setLatLng] = useState([]);
    const [positions, setPositions] = useState([]);
    useEffect(() => {
        //유저 데이터
        axios.get(GET_USERS).then((res) => {
          setUserName(res.data.Users);
        });
    
        //마커 위치
        axios.get(POST_LATLNG1).then((res) => {
            setPositions(res.data.LatLng1);
        });
      }, []);
      console.log(positions);
      console.log(UserName);
      const EventMarkerContainer = ({ position, content }) => {
        const map = useMap()
        const [isVisible, setIsVisible] = useState(false)
    
        return (
          <MapMarker
            position={position} // 마커를 표시할 위치
            // @ts-ignore
            onClick={(marker) => map.panTo(marker.getPosition())}
            onMouseOver={() => setIsVisible(true)}
            onMouseOut={() => setIsVisible(false)}
          >
            {isVisible && content}
          </MapMarker>
        )
      }
    
    const defaultMap = ()=>{
        return (
            <div>
                  <Map // 지도를 표시할 Container
            center={{
              // 지도의 중심좌표
              lat: 33.450705,
              lng: 126.570677,
            }}
            style={{
              // 지도의 크기
              width: "100%",
              height: "450px",
            }}
            level={3} // 지도의 확대 레벨
          >
             {positions.map((value) => (
        <EventMarkerContainer
          key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
          position={value.latlng}
          content={value.title}
        />
      ))}
      </Map>
            </div>
        );
        
      }
      return (
        <div>
            {defaultMap()}
        </div>
        
      )
};

export default Map3;
