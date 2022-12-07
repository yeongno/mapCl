import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Axios from "../../../../axios/Axios";
import useCoords from "../../../../hook/useCoords";

function Test2() {
  useCoords();
  const location = useSelector(
    (state) => state?.location?.centerlocation?.center
  );
  const [location1, setlocation1] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    setlocation1(`${location?.lat}, ${location?.lng}`);
  }, [location]);
  const onList = () => {
    console.log("location1", location1);
    axios
      .post("/place/list", {
        location: location1,
        numPoints: 2,
        radius: 1000,
      })
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const rendermap = data.map((data, index) => {
    return <div key={index}>{data.location}</div>;
  });

  return (
    <div>
      <button onClick={onList}>list</button>
      {rendermap}
    </div>
  );
}

export default Test2;
