import React from "react";
import CommentSection from "./commentSection/CommentSection";
import PostSection from "./postSection/PostSection";
import "../../../styles/community/detailPost/DetailPost.scss";

function DetailPost() {
  return (
    <div className="detailPost_container">
      <div className="detailPost_wrapper">
        <div className="postSection_container">
          <PostSection />
        </div>
        <div className="commentSection_container">
          <CommentSection />
        </div>
      </div>
    </div>
  );
}

export default DetailPost;
