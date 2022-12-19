import { UpSquareOutlined } from "@ant-design/icons";
import React from "react";

function Btn__TopTogle() {
  const onTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={onTop}
      style={{
        position: "fixed",
        marginLeft: "120vh",
        marginTop: "50vh",
        fontSize: "3em",
        cursor: "pointer",
        zIndex: "110",
      }}
    >
      <UpSquareOutlined />
    </div>
  );
}

export default Btn__TopTogle;
