import React, { useEffect, useState } from "react";
import { DoubleRightOutlined } from "@ant-design/icons";
import "../../../styles/community/main/MiniPost.scss";

import { usePost } from "../../../../hook/useMyInfo";
import { turnForum } from "../../../../redux/_actions/turn_action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import RenderCards from "./RenderCards";
function MiniInquiry() {
  const dispatch = useDispatch();
  const Post = usePost();
  const [generalList, setGeneralList] = useState([]);

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
    <div className="miniPost-container">
      <div className="miniPost-wrapper">
        <div className="miniPostLabel-container">
          <span>문의 게시글</span>
          <Link to={"/communityPage/inquiry"}>
            <DoubleRightOutlined />
          </Link>
        </div>
        <RenderCards generalList={generalList} />
      </div>
    </div>
  );
}

export default MiniInquiry;
