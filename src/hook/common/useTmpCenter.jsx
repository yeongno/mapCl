//위치 이동 시 이벤트 호출 및 마커 생성

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_MYADS,
  GET_MYPOSTSINFO,
  GET_MYUSERINFO,
} from "../../config/tempClientConfig";
import { setCenterLocation } from "../../redux/_actions/mapNav/location_action";
import { turnMapCover } from "../../redux/_actions/turn_action";
import useCoords from "../useCoords";
import { usePreCenter } from "../useMyInfo";
import useNearByUsers from "../useNearByUsers";

function useTmpCenter(props) {
  const preCenter_reducer = usePreCenter();
  const { latitude, longitude, isLoaded } = useCoords();

  const nearUser = useNearByUsers();
  const [markers, setMarkers] = useState([]);
  const [userMarkers, setUserMarkers] = useState([]);
  const [myPostsMarkers, setMyPostsMarkers] = useState([]);
  const [myAdsMarkers, setMyAdsMarkers] = useState([]);

  const dispatch = useDispatch();

  //지도 중심좌표가 움직인 정도를 알기 위한 값
  const [tmpCenter, setTmpCenter] = useState({
    center: {
      lat: latitude,
      lng: longitude,
    },
  });
  //설정 값만큼 움직였을 경우 데이터를 불러오기 위한 플래그 값
  const [onChanged, setOnChanged] = useState(0);

  useEffect(() => {
    if (onChanged === 0 && latitude) {
      setTmpCenter({
        center: {
          lat: latitude,
          lng: longitude,
        },
      });
      setOnChanged(onChanged + 1);
    }
    //약 150미터
    // let mem = 0.00165628926738;
    let mem = 0.00265628926738;

    //위도 변경 약 400미터 마다 업데이트
    if (
      preCenter_reducer?.center.lat >= tmpCenter?.center.lat + mem ||
      preCenter_reducer?.center.lat <= tmpCenter?.center.lat - mem
    ) {
      setOnChanged(onChanged + 1);
      setTmpCenter({
        center: {
          lat: preCenter_reducer?.center.lat,
          lng: preCenter_reducer?.center.lng,
        },
      });
    }
    //경도 변경 약 400미터 마다 업데이트
    if (
      preCenter_reducer?.center.lng >= tmpCenter?.center.lng + mem ||
      preCenter_reducer?.center.lng <= tmpCenter?.center.lng - mem
    ) {
      dispatch(setCenterLocation(tmpCenter));
      setOnChanged(onChanged + 1);
      setTmpCenter({
        center: {
          lat: preCenter_reducer?.center.lat,
          lng: preCenter_reducer?.center.lng,
        },
      });
    }
  }, [latitude, preCenter_reducer]);

  //tmpCenter 업데이트 되면 선호 지역 데이터 불러옴
  useEffect(() => {
    let markers = [];
    //더미데이터 markers에 등록
    axios.get(GET_MYUSERINFO).then((res) => {
      for (var i = 0; i < res.data.user[0].priority.length - 1; i++) {
        markers.push({
          position: {
            lat: res.data.user[0].priority[i].lat,
            lng: res.data.user[0].priority[i].lng,
          },
        });
      }
      setMarkers(markers);
    });
    let myPostsMarkers = [];
    //더미데이터 myPostsMarkers 등록
    axios.get(GET_MYPOSTSINFO).then((res) => {
      for (var i = 0; i < res.data.myPosts.length - 1; i++) {
        myPostsMarkers.push({
          position: {
            lat: res.data.myPosts[i].lat,
            lng: res.data.myPosts[i].lng,
          },
        });
      }
      setMyPostsMarkers(myPostsMarkers);
    });
    let myAdsMarkers = [];
    //더미데이터 myPostsMarkers 등록
    axios.get(GET_MYADS).then((res) => {
      for (var i = 0; i < res.data.myAds.length - 1; i++) {
        myAdsMarkers.push({
          position: {
            lat: res.data.myAds[i].lat,
            lng: res.data.myAds[i].lng,
          },
          content: res.data.myAds[i],
        });
      }
      setMyAdsMarkers(myAdsMarkers);
    });
    let userMarkers = [];
    //더미데이터 markers에 등록
    if (nearUser) {
      for (var i = 0; i < 5; i++) {
        if (nearUser.data?.[i]?.location) {
          var [left, right] = nearUser.data?.[i]?.location.split("(");
          var [left1, right1] = right.split(")");
          var [left2, right2] = left1.split(" ");
          userMarkers.push({
            position: {
              lat: left2,
              lng: right2,
            },
          });
        } else {
          userMarkers.push({
            position: {
              lat: null,
              lng: null,
            },
          });
        }

        setUserMarkers(userMarkers);
      }
    }
  }, [onChanged]);

  //MapCover의 OnOff를 위한 함수
  useEffect(() => {
    if (onChanged > 3) {
      dispatch(turnMapCover(false));
    } else {
      dispatch(turnMapCover(true));
    }
  }, [onChanged]);

  return { markers, userMarkers, myPostsMarkers, myAdsMarkers };
}

export default useTmpCenter;
