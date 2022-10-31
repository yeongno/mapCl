/*global kakao*/

//해당 마커 클릭 시 인포 윈도우 띄우고 해당 마커 close 하면 닫기
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Map, MapMarker, StaticMap, useMap } from "react-kakao-maps-sdk";
import { GET_USERS, POST_LATLNG, POST_LATLNG1 } from "../../../config/clientConfig";
const Map4 = () => {
    const [UserName, setUserName] = useState([]);
    const [LatLng, setLatLng] = useState([]);
    const [positions, setPositions] = useState([]);
    const [isOpen, setIsOpen] = useState(null) 
    const [isClose, setIsClose] = useState(null) 
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
      const EventMarkerContainer = ({ position, content, index }) => {
        const map = useMap()
        const [isVisible, setIsVisible] = useState(false)
        const offWindow=(index)=>{
            console.log(index)
            setIsClose(index)
        }
        const onWindow=(index)=>{
          console.log(index)
          setIsOpen(index)
      }
        return (
 
          <div>
         {/* <MapMarker
            position={position} // 마커를 표시할 위치
            // @ts-ignore
            onClick={(marker) => map.panTo(marker.getPosition())}
            onMouseOver={() => setIsVisible(true)}
            onMouseOut={() => setIsVisible(false)}
          >
            {isVisible && content}
          </MapMarker> */}
          <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
         position={position}
        clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        // onClick={() => setIsOpen(true)}
        onClick={()=>{onWindow(index)}}
      >
        {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
        {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
        {(isOpen === index) && index !==isClose && (
            <div style={{ minWidth: "150px" }}>
            <img
              alt="close"
              width="14"
              height="13"
              src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
                cursor: "pointer",
              }}
              // onClick={() => setIsOpen(false)}
              onClick={()=>{offWindow(index)}}
            />
            <div style={{ padding: "5px", color: "#000" }}>Hello World!</div>
          </div>
         
        )}
      </MapMarker>
          </div>
 
          
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
             {positions.map((value, index) => (
        <EventMarkerContainer
          key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
          index = {index}
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

export default Map4;
