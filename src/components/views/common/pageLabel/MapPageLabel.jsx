import React from "react";

function MapPageLabel() {
  return (
    <div style={{ width: "100vw", height: "20rem", background: "red" }}>
      {" "}
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
          MapPage
        </div>
      </div>
    </div>
  );
}

export default MapPageLabel;
