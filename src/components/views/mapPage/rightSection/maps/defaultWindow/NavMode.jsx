import React from "react";

function NavMode(props) {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ marginRight: "1rem" }}
        onClick={() => {
          props.setMode("Group");
        }}
      >
        모집
      </div>
      <div
        onClick={() => {
          props.setMode("Write");
        }}
      >
        글작성
      </div>
    </div>
  );
}

export default NavMode;
