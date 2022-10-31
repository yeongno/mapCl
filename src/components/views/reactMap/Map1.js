/*global kakao*/

//react sdk를 이용한 맵 생성
import React, { useEffect, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
const Map1 = () => {
    const defaultMap = ()=>{
        return (
          <Map // 지도를 표시할 Container
            center={{
              // 지도의 중심좌표
              lat: 33.450701,
              lng: 126.570667,
            }}
            style={{
              // 지도의 크기
              width: "100%",
              height: "450px",
            }}
            level={3} // 지도의 확대 레벨
          />
        );
      }
      return (
        <div>
            {defaultMap()}
        </div>
        
      )
};

export default Map1;
