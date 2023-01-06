import React from "react";
import { DoubleRightOutlined } from "@ant-design/icons";
import "../../../styles/community/main/MiniGeneral.scss";
function MiniGeneral() {
  return (
    <div className="miniGeneral-container">
      <div className="miniGeneral-wrapper">
        <div className="generalLabel-container">
          <span>인기 자유 게시글</span>
          <span>
            <DoubleRightOutlined />
          </span>
        </div>
      </div>
    </div>
  );
}

export default MiniGeneral;
