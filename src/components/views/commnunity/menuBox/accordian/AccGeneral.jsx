import React, { useEffect, useRef, useState } from "react";
import { usePost } from "../../../../../hook/useMyInfo";
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
  const Post = usePost();
  const [generalList, setGeneralList] = useState([]);
  const renderCards = generalList.map((Post, index) => {
    return (
      <div className="post-section">
        <div className="title-section">{Post.title}</div>
        <div className="content-section">{Post.content}</div>
        <div className="date-section">
          <span>2011-02-12</span>
        </div>
      </div>
    );
  });
  //generalList 세팅
  useEffect(() => {
    if (Post) {
      for (let a = 0; a < 15; a++) {
        generalList[a] = Post[a];
        setGeneralList(generalList);
      }
    }
  }, [Post]);

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
              <div className="title-section">
                title title title title title title title title
              </div>
              <div className="content-section">
                content content content content content content content content
              </div>
              <div className="date-section">
                <span>2011-02-12</span>
              </div>
            </div>
            {renderCards}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccGeneral;
