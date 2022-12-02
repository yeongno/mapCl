import { CheckOutlined, LockOutlined } from "@ant-design/icons";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/registerPage/RegisterPage.scss";

function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [checkEmail, setCheckEmail] = useState(false);
  const isEmail = (email) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(email);
  };
  useEffect(() => {
    setCheckEmail(isEmail(email));
  }, [email]);

  const onEmail = (e) => {
    setEmail(e.target.value);
  };

  const onCheckId = () => {
    //todo
    //중복 확인 api요청 후 true면 REF_idCheck를 이용하여 opacity 값 조정 후 disabled
  };

  return (
    <div className="registerPage-container">
      <div className="registerPage-wrapper">
        <div className="topLogo-container">
          <span
            onClick={() => {
              navigate("/mainpage");
            }}
          >
            CHACHAGO
          </span>
        </div>
        <div className="form-container">
          <span>아이디</span>
          {!checkEmail && <span>제대로 입력해라</span>}
          <div className="form-id">
            <button ref={REF_idCheck} onClick={onCheckId}>
              <CheckOutlined />
              중복 확인
            </button>
            <input name="id" onChange={onEmail} />
          </div>
          <span>비밀번호</span>
          <div className="form-password">
            <LockOutlined />
            <input type="password" name="password" />
          </div>
          <span>비밀번호 재확인</span>
          <input type="password" name="confirmPassword" />
          <span>닉네임</span>
          <input name="nickName" />
          <div className="form-submit">
            <button>가입하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
