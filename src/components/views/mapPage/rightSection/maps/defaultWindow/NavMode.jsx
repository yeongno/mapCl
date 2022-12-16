import React from "react";
import { useState } from "react";
import "../../../../../styles/mapPage/infoWindow/default/NavMode.scss";
function NavMode(props) {
  const [active, setActive] = useState("Group");
  const onWrite = () => {
    props.setMode("Write");
    setActive("Write");
  };
  const onGroup = () => {
    props.setMode("Group");
    setActive("Group");
  };
  const onFavorite = () => {
    props.setMode("Favorite");
    setActive("Favorite");
  };
  return (
    <div className="navMode-container">
      <div className="navMode-wrapper">
        {/* <button
          onClick={() => {
            props.setMode("Group");
          }}
        >
          모집
        </button> */}
        {(active === "Group" && (
          <button className="btn--activity" onClick={onGroup}>
            모집
          </button>
        )) || <button onClick={onGroup}>모집</button>}
        {(active === "Write" && (
          <button className="btn--activity" onClick={onWrite}>
            글작성
          </button>
        )) || <button onClick={onWrite}>글작성</button>}
        {(active === "Favorite" && (
          <button className="btn--activity" onClick={onFavorite}>
            선호 지역 등록
          </button>
        )) || <button onClick={onFavorite}>선호 지역 등록</button>}
      </div>
    </div>
  );
}

export default NavMode;
