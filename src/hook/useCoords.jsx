import React, { useEffect, useState } from "react";

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

  const onSuccess = ({ coords: { latitude, longitude } }) => {
    setCoords({ latitude, longitude });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);
  console.log("use", coords);

  return coords;
};
export default useCoords;
