import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/header/Header.scss";
import Logo from "./Logo";
import MenuBar from "../manuBar/MenuBar";
import PageLabel from "../common/pageLabel/PageLabel";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="header-container">
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
      <PageLabel />
    </div>
  );
}

export default Header;
