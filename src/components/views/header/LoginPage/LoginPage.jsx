import { CheckOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../../redux/_actions/user_action";
import "../../../styles/loginPage/LoginPage.scss";

function LoginPage({ handleLogin }) {
  const [id, setId] = useState({});
  const [pw, setPW] = useState();
  const [keepLogin, setKeepLogin] = useState(false);
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
    disptach(loginUser(data)).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className="loginPage-container">
      <div className="loginPage-wrapper">
        {/* 홈 로고 섹션 */}
        <div className="topLogo-container"></div>
        {/* 여러 형식의 입력 방식 */}
        <div className="navForm-container"></div>
        {/* 로그인 폼 */}
        <div className="form-container">
          <form className="form--common">
            <input type="text" name="id" onChange={handleOnChangeId} />
            <input
              type="password"
              name="password"
              onChange={handleOnChangePW}
            />
            <div className="form-container__checkBox">
              {(keepLogin && (
                <CheckOutlined
                  onClick={() => {
                    setKeepLogin(false);
                  }}
                  style={{
                    border: "solid 1px black",
                  }}
                />
              )) || (
                <CheckOutlined
                  onClick={() => {
                    setKeepLogin(true);
                  }}
                  style={{ color: "white", border: "solid 1px black" }}
                />
              )}{" "}
              로그인 상태 유지
            </div>
            <div className="form__btn--submit" onClick={handleSubmit}>
              <span>LOGIN</span>
            </div>
            <div className="form__btn--other" onClick={handleSubmit}>
              <span>ID 찾기</span> <span>비밀번호 찾기</span>
              <span>회원가입</span>
            </div>
          </form>
        </div>
        {/* 다른 소셜 계정 로그인 */}
        <div className="navLogin-container"></div>
      </div>
    </div>
  );
}

export default LoginPage;
