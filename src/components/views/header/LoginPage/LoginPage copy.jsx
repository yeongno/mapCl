import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../../redux/_actions/user_action";

function LoginPage({ handleLogin }) {
  const [id, setId] = useState({});
  const [pw, setPW] = useState();
  const disptach = useDispatch();
  const handleOnChangeId = (e) => {
    setId(e.target.value);
  };
  const handleOnChangePW = (e) => {
    setPW(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    //handleLogin(id, pw);

    const data = {
      email: id,
      password: pw,
    };
    // axios
    //   .post("/user/login", data)
    //   .then((response) => {
    //     const { accessToken } = response.data.data.accessToken;
    //     window.localStorage.setItem("token", response.data.data.accessToken);

    //     // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
    //     axios.defaults.headers.common[
    //       "jwt_access_token"
    //     ] = `${response.data.data.accessToken}`;
    //     console.log("accessToken", axios.defaults.headers);

    //     // accessToken을 localStorage, cookie 등에 저장하지 않는다!
    //   })
    //   .catch((error) => {
    //     // ... 에러 처리
    //   });
    disptach(loginUser(data)).then((res) => {
      console.log(res);
    });

    axios
      .post("/place", {
        location: "36, 127.12",
      })
      .then((res) => console.log("res", res));
  }

  return (
    <div>
      <form>
        <input type="text" name="id" onChange={handleOnChangeId} />
        <input type="password" name="password" onChange={handleOnChangePW} />
        <button type="submit" onClick={handleSubmit}>
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
