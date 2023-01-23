import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { usePost } from "../../../../hook/useMyInfo";

function RenderCards(prop) {
  //각 Ref는 개별적인 요소 값을 변경하기 위해 배열로 하여 인덱스 값을 전달 받아 처리
  const Title_Ref = useRef([]);
  const Content_Ref = useRef([]);
  const Post = usePost();
  const [generalList, setGeneralList] = useState([]);

  //텍스트 hover 효과 (ellipsis해제)
  const onTitleOver = (index) => {
    Title_Ref.current[index].style.textOverflow = "unset";
    Title_Ref.current[index].style.whiteSpace = "unset";
  };
  const onTitleDown = (index) => {
    Title_Ref.current[index].style.textOverflow = "ellipsis";
    Title_Ref.current[index].style.whiteSpace = "nowrap";
  };
  const onContentOver = (index) => {
    Content_Ref.current[index].style.textOverflow = "unset";
    Content_Ref.current[index].style.whiteSpace = "unset";
  };
  const onContentDown = (index) => {
    Content_Ref.current[index].style.textOverflow = "ellipsis";
    Content_Ref.current[index].style.whiteSpace = "nowrap";
  };

  //generalList 세팅
  useEffect(() => {
    console.log("generalList", prop.generalList);
    if (Post) {
      for (let a = 0; a < 5; a++) {
        prop.generalList[a] = Post[a];
        setGeneralList(prop.generalList);
      }
    }
  }, [Post]);
  const renderCards = prop.generalList.map((Post, index) => {
    return (
      <div className="miniPostList-container" key={index}>
        <div
          className="title_section"
          ref={(el) => (Title_Ref.current[index] = el)}
          onMouseOver={() => {
            onTitleOver(index);
          }}
          onMouseOut={() => {
            onTitleDown(index);
          }}
        >
          <Link to={`/communityPage/${Post?.title}`}> {Post?.title} </Link>
        </div>{" "}
        <div
          className="content_section"
          ref={(el) => (Content_Ref.current[index] = el)}
          onMouseOver={() => {
            onContentOver(index);
          }}
          onMouseOut={() => {
            onContentDown(index);
          }}
        >
          {/* <a>{Post?.content}</a>{" "} */}
          <Link to={`/communityPage/${Post?.content}`}>
            {Post?.content}
          </Link>{" "}
        </div>{" "}
      </div>
    );
  });
  return <div>{renderCards}</div>;
}

export default RenderCards;
