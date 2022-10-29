/*global kakao*/

//기본 적인 기능으로 지도 표시 마커 표시 기능.
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GET_USERS, POST_LATLNG } from "../../../config/clientConfig";
const Marker2 = () => {
  const [UserName, setUserName] = useState([]);
  const [LatLng, setLatLng] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    //유저 데이터
    axios.get(GET_USERS).then((res) => {
      console.log(res.data.Users);
      setUserName(res.data.Users);
    });

    //마커 위치
    axios.get(POST_LATLNG).then((res) => {
      console.log(res.data.LatLng);
      setLatLng(res.data.LatLng);
    });
  }, []);
  useEffect(() => {
    //LatLng에 있는 데이터 를 가져와서 positions에 넣을 데이터 등록
    LatLng.map((location, index) => {
      console.log(location);
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

    // 마커 이미지의 이미지 주소입니다
    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      var marker1 = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        clickable: true, //마커를 클릭했을 때 지도의 클릭 이벤트가 발생
        image: markerImage, // 마커 이미지
      });

      // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
      var iwContent =
          '<div style="padding:5px;">' + UserName[0]?.name + "</div>", // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      // 마커에 클릭이벤트를 등록합니다
      // 마지막 값만 띄워지는 오류 수정
      kakao.maps.event.addListener(
        marker1,
        "click",
        (function (info, mark1) {
          return function () {
            info.open(map, mark1);
          };
        })(infowindow, marker1)
      );
      positions.forEach(function (position) {
        console.log(position.latlng, position.content);
      });

      // // /marker click event
      // const makeClickListener = (map, marker1, infowindow) => {
      //   return function () {
      //     infowindow.open(map, marker1);
      //   };
      // };
    }

    //마커가 지도 위에 표시 되도록 설정합니다.
    // marker.setMap(map);
    //지도 위의 마커를 제거하는 코드
    //marker.setMap(null);
  }, [LatLng]);
  return (
    <div>
      <div id="map" style={{ width: "100vw", height: "100vw" }}></div>
    </div>
  );
};

export default Marker2;
