import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Axios from "../axios/Axios";
import useLocationFormat from "./formatter/useLocationFormat";

function useNearByUsersList() {
  const reducer_PreLocation = useSelector(
    (state) => state?.location?.centerlocation
  );
  const [PreLocation_Data, setPreLocation_Data] = useState([]);
  const [PreLocation_Format, setPreLocation_Format] = useState("232, 233");
  const [ok, setOk] = useState(false);
  useEffect(() => {
    setPreLocation_Format(
      `${reducer_PreLocation?.center?.lat}, ${reducer_PreLocation?.center?.lng}`
    );
  }, [reducer_PreLocation]);
  useEffect(() => {
    if (reducer_PreLocation?.center?.lng > 0) {
      setOk(true);
    }
  }, [reducer_PreLocation]);
  useEffect(() => {
    if (ok) {
      axios
        .post("/place/list", {
          location: PreLocation_Format,
          numPoints: 1000,
          radius: 10,
        })
        .then((res) => {
          setPreLocation_Data(res.data);

          setOk(false);

          return res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // console.log("ok");
    }
  }, []);
  useEffect(() => {
    if (ok) {
      axios
        .post("/place/list", {
          location: PreLocation_Format,
          numPoints: 1000,
          radius: 10,
        })
        .then((res) => {
          setPreLocation_Data(res.data);

          setOk(false);

          return res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
    }
  }, [reducer_PreLocation, PreLocation_Format]);

  return PreLocation_Data;
}

export default useNearByUsersList;
