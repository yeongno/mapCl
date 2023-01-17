import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNoticePost, usePost } from "../../../hook/useMyInfo";
import Footer from "./common/Footer";
import "../../styles/community/notice/Notice.scss";
import { Link } from "react-router-dom";
import { getNotice } from "../../../redux/_actions/post_action";
import { turnForum } from "../../../redux/_actions/turn_action";

function Notice() {
  const dispatch = useDispatch();
  const Post = useNoticePost();
  const [LastIndex, setLastIndex] = useState(0);
  const [ThisPaging, setThisPaging] = useState(1);
  const [ThisTopic, setThisTopic] = useState("public");
  useEffect(() => {
    dispatch(getNotice());
    dispatch(turnForum("NOTICE_FORUM"));
  }, []);

  useEffect(() => {
    setLastIndex(Post?.length);
  }, [Post]);
  const renderCards = Post?.map((posts, index) => {
    if (ThisPaging * 30 < index + 1 || index < ThisPaging * 30 - 30) {
      return;
    }

    return (
      <div className="noticeList_ListSection" key={index}>
        <p> {Post[index]?.topic}</p>

        <p
          style={{
            color: "gray",
          }}
          // to={`/community/${Post[index]?._id}`}
        >
          <Link
            style={{
              color: "gray",
            }}
            to={`/communityPage/${Post[index]?.content}`}
          >
            {Post[index]?.title}
          </Link>
        </p>
        <p> 글쓴이</p>
        {/* <p>{moment(Post[index]?.createdAt).format("YY[/]M[/]D")}</p> */}
        <p>{index}</p>
        <p>-</p>
        <div className="partitionList_ListSection" />
      </div>
    );
  });
  return (
    <div>
      {renderCards}
      {LastIndex > 1 && (
        <Footer
          LastIndex={LastIndex}
          setThisPaging={setThisPaging}
          ThisTopic={ThisTopic}
        />
      )}
    </div>
  );
}

export default Notice;
