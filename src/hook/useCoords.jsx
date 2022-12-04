import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPreLocation } from "../redux/_actions/mapNav/location_action";

/**
 * 현재 위치를 리턴 해주는 훅
 * @returns {latitude, longitude, isLoad}
 * @type {
 * latitude : number | null
 * longitude : number | null
 * isLoaded : boolean | true
 * }
 * 선언 값
 * const {latitude,longitude} = useCoords()
 * 
 * 세팅 값
 * const [state, setState] = useState({
    center: {
      lat: latitude,
      lng: longitude,
    }
  }) 
 */
const useCoords = () => {
  const [coords, setCoords] = useState({
    latitude: null,
    longitude: null,
    isLoaded: false,
  });
  const dispatch = useDispatch();

  const onSuccess = ({ coords: { latitude, longitude } }) => {
    setCoords({ latitude, longitude });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);
  useEffect(() => {
    dispatch(setPreLocation(coords));
  }, [coords]);
  return coords;
};
export default useCoords;
