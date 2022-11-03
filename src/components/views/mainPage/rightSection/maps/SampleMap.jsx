/*global kakao*/

// 마크 위치에 바로 요소 값 띄우기
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomOverlayMap, Map, MapMarker, StaticMap, useMap } from "react-kakao-maps-sdk";
import { GET_USERS, POST_LATLNG1 } from "../../../../../config/clientConfig";
import EventMarkerContainer from "./EventContainer";
import EventMarkerContainer1 from "./EventContainer1";
const SampleMap = () => {
  const [UserName, setUserName] = useState([]);
  const [LatLng, setLatLng] = useState([]);
  const [positions, setPositions] = useState([]);
  const [isOpen, setIsOpen] = useState(null) 
  const [isClose, setIsClose] = useState(null) 
  const [markers, setMarkers] = useState([])
  const [markers1, setMarkers1] = useState([])

  //leftSection에서 받아온 redux mapType값
  const [map, setMap] = useState()
  
  const [info, setInfo] = useState()
  //키 change 하는 실시간 값
  const [keyword, setKeyword] = useState()

  //키 컨펌 한 키워드
  const [keyword1, setKeyword1] = useState("강남")

  //지도의 위치
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 33.452613, lng: 126.570888 },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  })
    
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
      useEffect(() => {

        let markers = []
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
          })
        }
        setMarkers(markers)

        });

        //지도 키워드 검색 및 마커 등록
        const ps = new kakao.maps.services.Places()
        ps.keywordSearch(keyword1, (data, status, _pagination) => {
          if (status === kakao.maps.services.Status.OK) {
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            let markers1 = []
    
            for (var i = 0; i < data.length; i++) {
              // @ts-ignore
              markers1.push({
                position: {
                  lat: data[i].y,
                  lng: data[i].x,
                },
                content: data[i].place_name,
              })
              // @ts-ignore
            }
            setMarkers1(markers1)

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            setState({
              center: { lat: data[0].y, lng: data[0].x },
              isPanto: true,
            })
          }
        })
      }, [map,keyword1])

    const onKeyword = (e)=>{
      setKeyword(e.target.Value)

    }
    const onKeyword1 =(e)=>{
      if(e.key==='Enter'){
        setKeyword1(e.target.value)
      }
    }
    const defaultMap = ()=>{
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
              position:"absolute",
            }}
            level={3} // 지도의 확대 레벨
          >
             {markers.map((marker, index) => (
              <div key={index}>
                        <EventMarkerContainer
          key={`EventMarkerContainer-${marker.position.lat}-${marker.position.lng}`}
          position={marker.position}
          index = {index}
          content = {marker.content}

        />

        {/* 마크 위치에 바로 요소 띄우기 */}
        <CustomOverlayMap
        position={            marker.position        }>
        <div className="label" style={{color: "#000"}}>
          <div >{marker.content}</div>
        </div>
        </CustomOverlayMap>
              </div>

      ))}
        {markers1.map((marker, index) => (
              <div key={index}>
                        <EventMarkerContainer1
          key={`EventMarkerContainer-${marker.position.lat}-${marker.position.lng}`}
          position={marker.position}
          index = {index}
          content = {marker.content}

        />

        {/* 마크 위치에 바로 요소 띄우기 */}
        <CustomOverlayMap
        position={            marker.position        }>
        <div className="label" style={{color: "#000"}}>
          <div >{marker.content}</div>
        </div>
        </CustomOverlayMap>
              </div>

      ))}
       
      </Map>
            </div>
        );
        
      }
      return (
        <div>
            {defaultMap()}
            <input type="text" name=""  onChange={onKeyword} onKeyDown={onKeyword1} style={{position:"absolute"
              ,zIndex:"21", opacity:"0.7", fontWeight:"bold"
            }}>{keyword}</input> 
        </div>
        
      )
};

export default SampleMap;
