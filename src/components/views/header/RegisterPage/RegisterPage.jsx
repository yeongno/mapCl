import { CheckOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../../redux/_actions/user_action";
import "../../../styles/registerPage/RegisterPage.scss";

function RegisterPage() {
  const idCheck_Ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [nickName, setNickName] = useState();
  const [confirmPW, setConfirmPW] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [checkMatchPW, setMatchPW] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  //비밀번호 정규식
  //숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.
  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  const isEmail = (email) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    return emailRegex.test(email);
  };
  useEffect(() => {
    setCheckEmail(isEmail(email));
  }, [email]);

  useEffect(() => {
    if (password === confirmPW) {
      setMatchPW(true);
    } else {
      setMatchPW(false);
    }
  }, [password]);
  const onEmail = (e) => {
    setEmail(e.target.value);
  };
  const onPassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.match(passwordRegEx) === null) {
      setCheckPassword(false);
    } else {
      setCheckPassword(true);
    }
  };
  const onCheckPassword = (e) => {
    setConfirmPW(e.target.value);
    if (e.target.value === password) {
      setMatchPW(true);
    } else {
      setMatchPW(false);
    }
  };

  const onCheckId = () => {
    //todo
    //중복 확인 api요청 후 true면 REF_idCheck를 이용하여 opacity 값 조정 후 disabled
  };

  const onNickName = (e) => {
    setNickName(e.target.value);
  };

  const onSubmit = () => {
    const body = {
      email,
      password,
      username: nickName,
    };
    if (!checkPassword || !checkEmail || !checkMatchPW || !nickName) {
      //   message.success("정보를 다시 확인해 주십시요.");
      alert("정보를 다시 확인해 주십시오.");
    } else {
      //todo 404오류 잡기
      //register api
      axios.post("/user", body).then(() => {
        dispatch(loginUser(body)).then((res) => {
          if (res.payload.accessToken) {
            console.log("res", res);
            navigate("/mainpage");
            alert("가입을 축하드립니다.");
          } else {
            alert("다시 정보를 확인해 주십시오.");
          }
        });
      });
    }
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
          {!checkEmail && (
            <span
              style={{
                position: "absolute",
                marginLeft: "25rem",
                color: "red",
              }}
            >
              이메일 형식으로 입력해야 합니다.
            </span>
          )}{" "}
          <span>아이디</span>
          <div className="form-id">
            <button ref={idCheck_Ref} onClick={onCheckId}>
              <CheckOutlined />
              중복 확인
            </button>
            <input name="id" onChange={onEmail} />
          </div>
          {!checkPassword && (
            <span
              style={{
                position: "absolute",
                marginLeft: "12rem",
                color: "red",
              }}
            >
              숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.
            </span>
          )}{" "}
          <span>비밀번호</span>
          <div className="form-password">
            <LockOutlined />
            <input type="password" name="password" onChange={onPassword} />
          </div>
          {!checkMatchPW && (
            <span
              style={{
                position: "absolute",
                marginLeft: "26rem",
                color: "red",
              }}
            >
              비밀번호와 일치하지 않습니다.
            </span>
          )}
          <span>비밀번호 재확인</span>
          <input
            type="password"
            name="confirmPassword"
            onChange={onCheckPassword}
          />
          <span>닉네임</span>
          <input name="nickName" onChange={onNickName} />
          <div className="form-submit">
            <button onClick={onSubmit}>가입하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
