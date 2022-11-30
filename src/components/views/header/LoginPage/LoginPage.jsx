import axios from "axios";
import React, { useState } from "react";

function LoginPage({ handleLogin }) {
  const [id, setId] = useState({});
  const [pw, setPW] = useState();

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
    axios
      .post("/api/users/loginjwt", data)
      .then((response) => {
        const { accessToken } = response.data.token;

        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;

        // accessToken을 localStorage, cookie 등에 저장하지 않는다!
      })
      .catch((error) => {
        // ... 에러 처리
      });
    axios.post("/api/users/jwt1", data);
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
