import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMainLocation } from "../../redux/_actions/mapNav/location_action";
import useCoords from "../useCoords";
import { useGeoLocation } from "../useMyInfo";

function useFirstMainLocation() {
  const dispatch = useDispatch();
  const geoLocation_reducer = useGeoLocation();
  const { latitude, longitude, isLoaded } = useCoords();
  //todo 추후에 redux로 내 위치 값 가져와서 지정 usecoords 훅 사용 예정
  useEffect(() => {
    if (!latitude) {
      dispatch(
        setMainLocation({
          center: {
            lat: geoLocation_reducer.latitude + 0.000001,
            lng: geoLocation_reducer.longitude,
          },
        })
      );
    } else {
      dispatch(
        setMainLocation({
          center: {
            lat: geoLocation_reducer.latitude,
            lng: geoLocation_reducer.longitude,
          },
        })
      );
    }
  }, []);
  return;
}

export default useFirstMainLocation;
