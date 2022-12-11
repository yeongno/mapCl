import axios from "axios";
import { slice } from "lodash";
import React, { useEffect } from "react";
import { useState } from "react";

function useDividePoInt(props) {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const location = props.location;
  const location1 = String(location);

  useEffect(() => {
    var [left, right] = location1.split("(");
    var [left1, right1] = right.split(")");
    var [left2, right2] = left1.split(" ");
    setLat(left2);
    setLon(right2);
  }, [props]);

  return lat, lon;
}

export default useDividePoInt;
