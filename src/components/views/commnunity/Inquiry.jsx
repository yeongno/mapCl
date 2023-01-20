import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInquiryPost } from "../../../hook/useMyInfo";
import "../../styles/community/inquiry/Inquiry.scss";
import { Link } from "react-router-dom";
import { getInquiry } from "../../../redux/_actions/post_action";
import { turnForum } from "../../../redux/_actions/turn_action";
import LabelBar from "./labelBar/LabelBar";
import MenuBox from "./menuBox/MenuBox";
import DefaultFooter from "./common/DefaultFooter";

function Inquiry() {
  const forum = useSelector((state) => state?.turn?.turnForum);
  const dispatch = useDispatch();
  const Post = useInquiryPost();
  const [LastIndex, setLastIndex] = useState(0);
  const [ThisPaging, setThisPaging] = useState(1);
  const [ThisTopic, setThisTopic] = useState("Inquiry");
  useEffect(() => {
    dispatch(getInquiry());
    dispatch(turnForum("INQUIRY_FORUM"));
  }, []);

  useEffect(() => {
    setLastIndex(Post?.length);
  }, [Post]);
  const InquiryCards = Post?.map((posts, index) => {
    if (ThisPaging * 30 < index + 1 || index < ThisPaging * 30 - 30) {
      return;
    }

    return (
      <div className="inquiryList_ListSection" key={index}>
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
    <div className="inquiry_container">
      <div className="inquiryList_container">
        <LabelBar forum={forum} />
        {InquiryCards}
        {LastIndex > 1 && (
          <DefaultFooter
            LastIndex={LastIndex}
            setThisPaging={setThisPaging}
            ThisTopic={ThisTopic}
          />
        )}
      </div>
    </div>
  );
}

export default Inquiry;
