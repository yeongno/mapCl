import React, { useEffect, useState } from "react";
import { DoubleRightOutlined } from "@ant-design/icons";
import "../../../styles/community/main/MiniGeneral.scss";
import { usePost } from "../../../../hook/useMyInfo";
import { turnForum } from "../../../../redux/_actions/turn_action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function MiniGeneral() {
  const dispatch = useDispatch();
  const Post = usePost();
  const [generalList, setGeneralList] = useState([]);
  const renderCards = generalList.map((Post, index) => {
    return (
      <div className="miniGeneralList-container" key={index}>
        <Link to={`/communityPage/${Post?.title}`}>제목 {Post?.title} </Link>
        <br />
        <Link to={`/communityPage/${Post?.content}`}>
          내용 {Post?.content}{" "}
        </Link>
      </div>
    );
  });
  //generalList 세팅
  useEffect(() => {
    if (Post) {
      for (let a = 0; a < 5; a++) {
        generalList[a] = Post[a];
        setGeneralList(generalList);
      }
    }
  }, [Post]);
  return (
    <div className="miniGeneral-container">
      <div className="miniGeneral-wrapper">
        <div className="miniGeneralLabel-container">
          <span>인기 자유 게시글</span>
          <Link to="/communityPage/general">
            <DoubleRightOutlined />
          </Link>
        </div>
        {renderCards}
      </div>
    </div>
  );
}

export default MiniGeneral;
