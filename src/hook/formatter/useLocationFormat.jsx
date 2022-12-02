import axios from "axios";
import { slice } from "lodash";
import React, { useEffect } from "react";
import { useState } from "react";
/**
 * 들어온 location 값을 사용 할 수 있게 배열로 포맷팅 해준다.
 * @param {location="POINT(36.23231 12.24233)"}
 * @returns {[lat, lon]}
 */
function useLocationFormat(location) {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (location) {
      var [left, right] = location.split("(");
      var [left1, right1] = right.split(")");
      var [left2, right2] = left1.split(" ");
      setLat(left2);
      setLon(right2);
      setResult([left2, right2]);
    }
  }, [location]);

  return result;
}

export default useLocationFormat;
