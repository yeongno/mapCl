import { EditOutlined, FormOutlined } from "@ant-design/icons";
import React from "react";
import "../../../../../styles/community/menuBox/AccMenu.scss";
function AccMenu_Menu() {
  return (
    <div className="accMenu-container">
      <div className="accMenu-wrapper">
        <span>글 쓰기</span>
        <FormOutlined />
      </div>
    </div>
  );
}

export default AccMenu_Menu;
