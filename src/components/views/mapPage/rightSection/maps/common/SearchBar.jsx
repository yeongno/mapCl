/*global kakao*/

import React, { useEffect, useState } from "react";
import useCoords from "../../../../../../hook/useCoords";

function SearchBar(props) {
  const { latitude, longitude, isLoaded } = useCoords();

  //키 change 하는 실시간 값
  const [keyword, setKeyword] = useState("");

  //키 컨펌 한 키워드
  const [keyword1, setKeyword1] = useState();
  const [prekeyword1, setpreKeyword1] = useState();
  const [key, setKey] = useState(true);

  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // if (!map) return
    const ps = new kakao.maps.services.Places();
    if (keyword1) {
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

          if (prekeyword1) {
            let lat = Number(data[0].y);
            let result = String(lat + 0.0000000001);
            props.setState({
              center: {
                lat: result,
                lng: data[0].x,
              },
              isPanto: false,
            });
            setpreKeyword1(null);
          } else {
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            props.setState({
              center: { lat: data[0].y, lng: data[0].x },
              isPanto: false,
            });
            setpreKeyword1(keyword1);
          }
        }
      });
    }
  }, [keyword1, key]);

  const onKeyword = (e) => {
    setKeyword(e.target.Value);
  };
  const onKeyword1 = (e) => {
    if (e.key === "Enter") {
      setKeyword1(e.target.value);
      setKeyword("");
      if (key) {
        setKey(false);
      } else {
        setKey(true);
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        name=""
        onChange={onKeyword}
        onKeyDown={onKeyword1}
        style={{ position: "absolute", zIndex: "21" }}
        value={keyword}
      />
    </div>
  );
}

export default SearchBar;
