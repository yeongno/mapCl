import { DownOutlined, UpOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import AccGeneral from "./accordian/AccGeneral";
import "../../../styles/community/menuBox/MenuBox.scss";
import { useNavigate } from "react-router-dom";
import AccInquiry from "./accordian/AccInquiry";
function MenuBox() {
  const navigate = useNavigate();
  const [onGener, setOnGener] = useState("false");
  const [onInquiry, setInquiry] = useState("false");
  //general 아코디언 비/활성화
  const actGener = () => {
    console.log("aa");
    if (onGener == true) {
      setOnGener(false);
    } else {
      setOnGener(true);
    }
  };
  //inquiry 아코디언 비/활성화
  const actInquiry = () => {
    console.log("aa");
    if (onInquiry == true) {
      setInquiry(false);
    } else {
      setInquiry(true);
    }
  };
  return (
    <div className="menuBox-container">
      <div className="menuBox-wrapper">
        <div className="label-container">
          <div className="label-wrapper">MENU_BOX</div>
        </div>
        <div className="forum-container">
          <div className="forum-wrapper">
            <div className="general-container">
              <div className="general-wrapper">
                <div className="generalLabel-container">
                  <span
                    onClick={() => {
                      navigate("/communityPage/general");
                    }}
                  >
                    General
                  </span>
                  <span onClick={actGener}>
                    {(onGener == true && <DownOutlined />) || <UpOutlined />}
                  </span>
                </div>
                <div className="generalDetail-container">
                  <AccGeneral onGener={onGener} />
                </div>
              </div>
            </div>
            <div className="general-container">
              <div className="general-wrapper">
                <div className="generalLabel-container">
                  <span
                    onClick={() => {
                      navigate("/communityPage/general");
                    }}
                  >
                    Inquiry
                  </span>
                  <span onClick={actInquiry}>
                    {(onInquiry == true && <DownOutlined />) || <UpOutlined />}
                  </span>
                </div>
                <div className="generalDetail-container">
                  <AccInquiry onInquiry={onInquiry} />
                </div>
              </div>
            </div>
            <div className="general-container">
              <div className="general-wrapper">
                <div className="generalLabel-container">
                  <span
                    onClick={() => {
                      navigate("/communityPage/general");
                    }}
                  >
                    General
                  </span>
                  <span onClick={actGener}>
                    {(onGener == true && <DownOutlined />) || <UpOutlined />}
                  </span>
                </div>
                <div className="generalDetail-container">
                  <AccGeneral onGener={onGener} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBox;
