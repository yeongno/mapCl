import React from "react";

function PageLabel() {
  //todo hook selector로 전환하여 컴포넌트 반환 할 수 있게 할 것
  return (
    <div className="landingPage-container">
      <div
        style={{
          position: "absolute",
          marginTop: "-1.2rem",
          fontSize: "2em",
          color: "white",
          fontWeight: "bold",
          zIndex: "1000",
          marginLeft: "8rem",
        }}
      >
        MainPage
      </div>
    </div>
  );
}

export default PageLabel;
