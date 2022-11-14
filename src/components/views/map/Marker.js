/*global kakao*/

//기본 적인 기능으로 지도 표시 마커 표시 기능.
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  GET_LATLNG,
  GET_USERS,
  POST_LATLNG,
} from "../../../config/clientConfig";
const Marker = () => {
  const [UserName, setUserName] = useState([]);
  const [LatLng, setLatLng] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    //유저 데이터
    axios.get(GET_USERS).then((res) => {
      setUserName(res.data.Users);
    });

    //마커 위치
    axios.get(POST_LATLNG).then((res) => {
      setLatLng(res.data.LatLng);
    });
  }, []);
  useEffect(() => {
    //LatLng에 있는 데이터 를 가져와서 positions에 넣을 데이터 등록
    LatLng.map((location, index) => {
      setPositions(
        (positions[index] = {
          title: location.title,
          latlng: new kakao.maps.LatLng(location.lat, location.lng),
        })
      );
    });
    var container = document.getElementById("map"); // 지도를 표시할 div
    var options = {
      center: new kakao.maps.LatLng(33.450705, 126.570677), //지도의 중심좌표
      level: 3, //지도의 확대 레벨
    };

    //지도를 생성
    var map = new kakao.maps.Map(container, options);

    /* 여러개의 마커 표시 */
    // 마커를 표시할 위치와 title 객체 배열입니다

    // var positions = [
    //   {
    //     title: "카카오",
    //     latlng: new kakao.maps.LatLng(LatLng[0]?.lat, 126.570677),
    //   },
    //   {
    //     title: "생태연못",
    //     latlng: new kakao.maps.LatLng(33.450936, 126.569477),
    //   },
    //   {
    //     title: "텃밭",
    //     latlng: new kakao.maps.LatLng(33.450879, 126.56994),
    //   },
    //   {
    //     title: "근린공원",
    //     latlng: new kakao.maps.LatLng(33.451393, 126.570738),
    //   },
    // ];

    // 마커 이미지의 이미지 주소입니다
    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
    }

    //마커 표시 위치
    var markerPosition = new kakao.maps.LatLng(
      37.365264512305174,
      127.10676860117488
    );

    //마커 생성
    var marker = new kakao.maps.Marker({
      position: markerPosition,
      clickable: true, //마커를 클릭했을 때 지도의 클릭 이벤트가 발생
    });

    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    var iwContent = '<div style="padding:5px;">' + UserName[0]?.name + "</div>", // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "click", function () {
      // 마커 위에 인포윈도우를 표시합니다
      infowindow.open(map, marker);
    });

    //마커가 지도 위에 표시 되도록 설정합니다.
    marker.setMap(map);
    //지도 위의 마커를 제거하는 코드
    //marker.setMap(null);
  }, [LatLng]);
  return (
    <div>
      <div id="map" style={{ width: "100vw", height: "100vw" }}></div>
    </div>
  );
};

export default Marker;
