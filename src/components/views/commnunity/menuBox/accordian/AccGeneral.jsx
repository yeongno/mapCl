import React, { useEffect, useRef } from "react";
import "../../../../styles/community/menuBox/AccGeneral.scss";
import AccMenu_Menu from "./accordian_menu/AccMenu_Menu";
function AccGeneral(props) {
  const General_Ref = useRef();

  useEffect(() => {
    if (props.onGener == true) {
      General_Ref.current.style.maxHeight = "100%";
      General_Ref.current.style.height = "100%";
      General_Ref.current.style.transition = "all 2s";
    } else {
      General_Ref.current.style.maxHeight = "0";
      General_Ref.current.style.height = "0";
      General_Ref.current.style.transition = "all 0s";
    }
  }, [props.onGener]);

  return (
    <div className="accGeneral-container" ref={General_Ref}>
      <AccMenu_Menu />
      <div className="myPosterList-container">
        <div className="myPosterList-wrapper">
          <div className="myListLabel-wrapper">
            <div>My Posters</div>
            <div>더 보기</div>
          </div>
          <div className="myList-wrapper">
            <div className="post-section">
              <div className="title-section">aaaaaaaaaaaaaaaaaaaaaaaa</div>
              <div className="content-section">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </div>
              <div className="date-section">2011-02-12</div>
            </div>
            <div className="post-section">
              <div className="title-section">aaaaaaa</div>
              <div className="content-section">aaaaa</div>
              <div className="date-section">
                <span>2011-02-12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccGeneral;
