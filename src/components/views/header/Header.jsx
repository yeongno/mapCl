import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/header/Header.scss";
import Logo from "./Logo";
import MenuBar from "../manuBar/MenuBar";
import PageLabel from "../common/pageLabel/PageLabel";
import DrawerHeader from "./DrawerHeader";
function Header() {
  const TopHeader_Ref = useRef();
  const HeaderLogo_Ref = useRef();
  const HeaderBtn_Ref = useRef();
  const MenuBar_Ref = useRef();
  // 스크롤이 50px 이상 내려올경우 true값을 넣어줄 useState
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY > 250) {
      setScroll(true);
      TopHeader_Ref.current.style.position = "";
    } else if (window.scrollY < 100) {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
      TopHeader_Ref.current.style.position = "";
    }
  };
  const navigate = useNavigate();
  return (
    <div className="header-container" ref={TopHeader_Ref}>
      <div className="header-wraper">
        <div ref={HeaderLogo_Ref}>
          <Logo />
        </div>
        <div className="btn-container" ref={HeaderBtn_Ref}>
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
      <div ref={MenuBar_Ref}>
        <MenuBar />{" "}
      </div>
      <PageLabel />
    </div>
  );
}

export default Header;
