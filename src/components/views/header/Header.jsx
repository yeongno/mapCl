import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/header/Header.scss";
import Logo from "./Logo";
import MenuBar from "../manuBar/MenuBar";
function Header() {
  const navigate = useNavigate();
  return (
    <div
      className="header-container"
      style={{
        backgroundImage: "url(assets/background/images/metalBluePaint.jpg)",
      }}
    >
      <div className="header-wraper">
        <Logo />
        <div className="btn-container">
          <button
            className="header__btn--login"
            onClick={() => navigate("/login")}
          >
            알림
          </button>
          <button
            className="header__btn--login"
            onClick={() => navigate("/login")}
          >
            내 정보 변경
          </button>
          <button
            className="header__btn--login"
            onClick={() => navigate("/login")}
          >
            login
          </button>
          <button
            className="header__btn--hello"
            onClick={() => navigate("/hello")}
          >
            hello
          </button>
        </div>
      </div>
      <MenuBar />
    </div>
  );
}

export default Header;
