import React, { useEffect, useRef, useState } from "react";
import { usePost } from "../../../../../hook/useMyInfo";
import "../../../../styles/community/menuBox/AccGeneral.scss";
import AccMenu_Menu from "./accordian_menu/AccMenu_Menu";
function AccInquiry(props) {
  const General_Ref = useRef();
  const Title_Ref = useRef();
  const Content_Ref = useRef();

  useEffect(() => {
    if (props.onInquiry == true) {
      General_Ref.current.style.maxHeight = "100%";
      General_Ref.current.style.height = "100%";
      General_Ref.current.style.transition = "all 2s";
    } else {
      General_Ref.current.style.maxHeight = "0";
      General_Ref.current.style.height = "0";
      General_Ref.current.style.transition = "all 0s";
    }
  }, [props.onInquiry]);
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

  const onTitleOver = () => {
    Title_Ref.current.style.textOverflow = "unset";
    Title_Ref.current.style.whiteSpace = "unset";
  };
  const onTitleDown = () => {
    Title_Ref.current.style.textOverflow = "ellipsis";
    Title_Ref.current.style.whiteSpace = "nowrap";
  };
  const onContentOver = () => {
    Content_Ref.current.style.textOverflow = "unset";
    Content_Ref.current.style.whiteSpace = "unset";
  };
  const onContentDown = () => {
    Content_Ref.current.style.textOverflow = "ellipsis";
    Content_Ref.current.style.whiteSpace = "nowrap";
  };
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
              <div
                className="title-section"
                onMouseOver={onTitleOver}
                onMouseOut={onTitleDown}
                ref={Title_Ref}
              >
                title title title title title title title title
              </div>
              <div
                className="content-section"
                ref={Content_Ref}
                onMouseOver={onContentOver}
                onMouseOut={onContentDown}
              >
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

export default AccInquiry;
