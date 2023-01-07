import React, { useEffect, useState } from "react";
import { DoubleRightOutlined } from "@ant-design/icons";
import "../../../styles/community/main/MiniNotice.scss";
import { usePost } from "../../../../hook/useMyInfo";
import { turnForum } from "../../../../redux/_actions/turn_action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function MiniNotice() {
  const dispatch = useDispatch();
  const Post = usePost();
  const [generalList, setGeneralList] = useState([]);
  const renderCards = generalList.map((Post, index) => {
    return (
      <div className="miniNoticeList-container" key={index}>
        <span>제목 {Post?.title}</span>
        <br />
        <span>내용 {Post?.content}</span>
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
    <div className="miniNotice-container">
      <div className="miniNotice-wrapper">
        <div className="miniNoticeLabel-container">
          <span>공지 사항</span>
          <Link to="/communityPage/Notice">
            <DoubleRightOutlined />
          </Link>
        </div>
        {renderCards}
      </div>
    </div>
  );
}

export default MiniNotice;
