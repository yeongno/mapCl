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
          <div className="btn--activity" onClick={onGroup}>
            모집
          </div>
        )) || <div onClick={onGroup}>모집</div>}
        {(active === "Write" && (
          <div className="btn--activity" onClick={onWrite}>
            글작성
          </div>
        )) || <div onClick={onWrite}>글작성</div>}
        {(active === "Favorite" && (
          <div className="btn--activity" onClick={onFavorite}>
            선호 지역 등록
          </div>
        )) || <div onClick={onFavorite}>선호 지역 등록</div>}
      </div>
    </div>
  );
}

export default NavMode;
