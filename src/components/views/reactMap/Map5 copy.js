/*global kakao*/

//services.places를 이용하여 여러 정보 데이터 가져오기 및 키워드 입력
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Map, MapMarker, StaticMap, useMap } from "react-kakao-maps-sdk";
import { GET_USERS, POST_LATLNG, POST_LATLNG1 } from "../../../config/clientConfig";
import InfoWindow1 from "./InfoWindow1";
const Map5 = () => {
  const [UserName, setUserName] = useState([]);
  const [LatLng, setLatLng] = useState([]);
  const [positions, setPositions] = useState([]);
  const [isOpen, setIsOpen] = useState(null) 
  const [isClose, setIsClose] = useState(null) 
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState()
  const [info, setInfo] = useState()
  const [keyword, setKeyword] = useState()
  const [keyword1, setKeyword1] = useState()
    
    useEffect(() => {
        //유저 데이터
        axios.get(GET_USERS).then((res) => {
          setUserName(res.data.Users);
        });
    
        //마커 위치
        axios.get(POST_LATLNG1).then((res) => {
            setPositions(res.data.LatLng1);
        });
        var container = document.getElementById("map"); // 지도를 표시할 div
        var options = {
          center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488), //지도의 중심좌표
          level: 3, //지도의 확대 레벨
        };
      
        var map = new kakao.maps.Map(container, options);
        setMap(map);
      }, []);
      useEffect(() => {
        // if (!map) return
        const ps = new kakao.maps.services.Places()
        console.log(ps)
    
        ps.keywordSearch(keyword1, (data, status, _pagination) => {
          if (status === kakao.maps.services.Status.OK) {
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            const bounds = new kakao.maps.LatLngBounds()
            let markers = []
    
            for (var i = 0; i < data.length; i++) {
              // @ts-ignore
              markers.push({
                position: {
                  lat: data[i].y,
                  lng: data[i].x,
                },
                content: data[i].place_name,
              })
              // @ts-ignore
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
            }
            setMarkers(markers)
    
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds)
          }
        })
      }, [map,keyword1])

      const EventMarkerContainer = ({ position, content, index }) => {
        const map = useMap()
        const [isVisible, setIsVisible] = useState(false)
        const offWindow=(index)=>{
            console.log(index)
            setIsClose(index)
        }
        const onWindow=(index)=>{
          setIsClose(null)
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
         zIndex="-1"
        clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        // onClick={() => setIsOpen(true)}
        onClick={()=>{onWindow(index)}}
      >
        {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
        {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
        {(isOpen === index) && index !==isClose && (
            <div style={{ minWidth: "150px"  }}>
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
              onClick={()=>{offWindow(index)}}
            />
            <InfoWindow1 />
          </div>
         
        )}
      </MapMarker>
          </div>
        )
      }
    const onKeyword = (e)=>{
      setKeyword(e.target.Value)

    }
    const onKeyword1 =(e)=>{
      if(e.key==='Enter'){
        setKeyword1(e.target.value)
      }
    }
    console.log(keyword1)
    const defaultMap = ()=>{
        return (
            <div>
                  <Map // 지도를 표시할 Container
                  id="map"
            center={{
              // 지도의 중심좌표
              // lat: 33.450705,
              // lng: 126.570677,
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
    {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
        >
          {info &&info.content === marker.content && (
            <div style={{color:"#000"}}>{marker.content}</div>
          )}
        </MapMarker>
      ))}
      </Map>
            </div>
        );
        
      }
      return (
        <div>
            {defaultMap()}
            <input type="text" name=""  onChange={onKeyword} onKeyDown={onKeyword1}>{keyword}</input> 
        </div>
        
      )
};

export default Map5;
