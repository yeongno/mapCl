import { CheckOutlined, LockOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/registerPage/RegisterPage.scss";

function RegisterPage() {
  const navigate = useNavigate();
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
          <div className="form-id">
            <button>
              <CheckOutlined />
            </button>
            <input name="id" />
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
