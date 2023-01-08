import axios from "axios";
import { slice } from "lodash";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Axios from "../../../axios/Axios";
import useLocationFormat from "../../../hook/formatter/useLocationFormat";
import useTestSelector from "../../../hook/navSelector/useTestSelector";
import { turnMenu } from "../../../redux/_actions/turn_action";
import Loading from "../commnunity/loading/Loading";
import MenuBar_Test from "./menuBar_Test/MenuBar_Test";

function Test() {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const [loading, setLoading] = useState(null);

  // const httpInstance = axios.create({
  //   baseURL: ["/api"],
  //   timeout: 30000,
  //   headers: {
  //     "content-type": "application/json; charset=UTF-8",
  //   },
  //   withCredentials: true,
  // });
  // 헤더에 인증 추가
  // httpInstance.defaults.headers.common.Authorization = `JWT TOKEN AUTHORIZATION`;
  useEffect(() => {
    const api = async () => {
      try {
        setLoading(true);

        await axios
          .post("/user/login", {
            // location: "36, 127.12",
            email: "abcd@email.com",
            password: "12345",
          })
          // '[API 주소]',
          // 매개변수
          .then((response) => {
            // respone에 대한 적절한 처리
            console.log(response);
          });
      } catch (e) {
        // 에러에 대한 적절한 처리
        if (e) {
          console.log(e);
          return;
        }
      }

      setLoading(false);
    };

    // 선언한 함수 호출;
    api();
  }, []);
  useEffect(() => {}, []);

  // 로딩 시 Spinner 띄움
  if (loading)
    return <Loading type="spin" color="#123123" message={"적절한 메시지"} />;

  return (
    <div>
      {loading && <Loading />}
      {/* <MenuBar_Test /> */}
      {/* <Outlet /> */}
    </div>
  );
}

export default Test;
