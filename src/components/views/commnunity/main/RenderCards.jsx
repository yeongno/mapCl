import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePost } from "../../../../hook/useMyInfo";

function RenderCards(prop) {
  const Post = usePost();
  const [generalList, setGeneralList] = useState([]);
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
    // console.log("!2321");
    return (
      <div className="miniPostList-container" key={index}>
        <Link to={`/communityPage/${Post?.title}`}>제목 {Post?.title} </Link>
        <br />
        <Link to={`/communityPage/${Post?.content}`}>
          내용 {Post?.content}{" "}
        </Link>
      </div>
    );
  });
  return <div>{renderCards}</div>;
}

export default RenderCards;
