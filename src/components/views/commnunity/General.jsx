import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { usePost } from "../../../hook/useMyInfo";
import { getPost } from "../../../redux/_actions/post_action";
import Footer from "./common/Footer";
import "../../styles/community/general/General.scss";
import MenuBox from "./menuBox/MenuBox";
import LabelBar from "./labelBar/LabelBar";
import { turnForum } from "../../../redux/_actions/turn_action";

function General() {
  const forum = useSelector((state) => state?.turn?.turnForum);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Post = usePost();
  const [LastIndex, setLastIndex] = useState(0);
  const [ThisPaging, setThisPaging] = useState(1);
  const [ThisTopic, setThisTopic] = useState("public");

  useEffect(() => {
    dispatch(getPost());
    dispatch(turnForum("GENERAL_FORUM"));
  }, []);

  useEffect(() => {
    setLastIndex(Post?.length);
  }, [Post]);
  const renderCards = Post?.map((posts, index) => {
    if (ThisPaging * 30 < index + 1 || index < ThisPaging * 30 - 30) {
      return;
    }

    return (
      <div className="generalList_ListSection" key={index}>
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
    <div className="general_container">
      <div className="generalList_container">
        <LabelBar forum={forum} />
        {renderCards}
        {LastIndex > 1 && (
          <Footer
            LastIndex={LastIndex}
            setThisPaging={setThisPaging}
            ThisTopic={ThisTopic}
          />
        )}
      </div>
    </div>
  );
}

export default General;
