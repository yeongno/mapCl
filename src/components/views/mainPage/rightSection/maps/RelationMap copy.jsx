/*global kakao*/

//더미데이터를 가져와 여러 마크 표시
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { GET_USERS, POST_LATLNG1 } from "../../../../../config/clientConfig";
const RelationMap = () => {
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
                {positions.map((positions1, index) => (
        <MapMarker
          key={`${positions[index].title}-${positions[index].latlng}`}
          position={positions[index].latlng} // 마커를 표시할 위치
          image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35
            }, // 마커이미지의 크기입니다
          }}
          title={positions[index].title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
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

export default RelationMap;
