import axios from "axios";
import { slice } from "lodash";
import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "../../../axios/Axios";
import useDividePoint from "../../../hook/common/useDividePoint";

function Test() {
  const [location, setLocation] = useState();
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  useEffect(() => {
    axios
      .post("/user/login", { email: "abcd@email.com", password: "1234" })
      .then((response) => {
        const { accessToken } = response.data.data.accessToken;
        window.localStorage.setItem("token", response.data.data.accessToken);

        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common[
          "jwt_access_token"
        ] = `${response.data.data.accessToken}`;
        console.log("accessToken", axios.defaults.headers);

        // accessToken을 localStorage, cookie 등에 저장하지 않는다!
      });
  }, []);

  //장소 목록
  useEffect(() => {
    Axios.post("/place", {
      location: "36, 127.12",
    }).then((res) => setLocation(res.data.data.location));
  }, []);

  const location2 = useDividePoint(location);
  console.log(location2[0]);

  return (
    <div>
      {lat},{lon},{location}
    </div>
  );
}

export default Test;
