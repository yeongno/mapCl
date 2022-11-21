/*global kakao*/

import React, { useEffect, useState } from "react";

function SearchBar(props) {
  //키 change 하는 실시간 값
  const [keyword, setKeyword] = useState();

  //키 컨펌 한 키워드
  const [keyword1, setKeyword1] = useState("강남");

  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // if (!map) return
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyword1, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        let markers = [];

        markers.push({
          position: {
            lat: data[0].y,
            lng: data[0].x,
          },
          content: data[0].place_name,
        });
        props.setKeyMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        props.setState({
          center: { lat: data[0].y, lng: data[0].x },
          isPanto: true,
        });
        console.log("set", markers);
      }
    });
  }, [keyword1]);
  const onKeyword = (e) => {
    setKeyword(e.target.Value);
  };
  const onKeyword1 = (e) => {
    if (e.key === "Enter") {
      setKeyword1(e.target.value);
    }
  };

  return (
    <div>
      {" "}
      <input
        type="text"
        name=""
        onChange={onKeyword}
        onKeyDown={onKeyword1}
        style={{ position: "absolute", zIndex: "21" }}
      >
        {keyword}
      </input>
    </div>
  );
}

export default SearchBar;
