/*global kakao*/

//기본 적인 기능으로 지도 표시 마커 표시 기능.
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GET_USERS } from "../../../config/UserConfig";
const Location = () => {
  const [Users, setUsers] = useState(null);
  useEffect(() => {
    var container = document.getElementById("map"); // 지도를 표시할 div
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488), //지도의 중심좌표
      level: 3, //지도의 확대 레벨
    };

    //지도를 생성
    var map = new kakao.maps.Map(container, options);

    //마커 표시 위치
    var markerPosition = new kakao.maps.LatLng(
      37.365264512305174,
      127.10676860117488
    );

    //마커 생성
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    //마커가 지도 위에 표시 되도록 설정합니다.
    marker.setMap(map);

    axios
      .get(GET_USERS)
      .then((res) => {
        console.log(res);
      })
      .then((data) => {
        setUsers(data);
      });

    //지도 위의 마커를 제거하는 코드
    //marker.setMap(null);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "100vw", height: "100vw" }}></div>
    </div>
  );
};

export default Location;
