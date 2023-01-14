import React from "react";
import "../../../../styles/community/detailPost/postSection/PostSection.scss";

function PostSection() {
  return (
    <div className="postSection_container">
      {/* 닉네임, 프로필, 글 생성 날짜 정보  */}
      <div className="topSection_container">
        {/* 프로필 사진 */}
        <div className="topLeftSection_container">
          <div></div>
        </div>
        {/* 닉네임, 글 생성 날짜 */}
        <div className="topRightSection_container">
          <span>이름</span>
          <br />
          <span>2022.02.22</span>
        </div>
      </div>
      {/* 제목, 내용, 사진 정보 */}
      <div className="bottomSection_container">
        <div className="titleSection_container">
          <span>title 1</span>
        </div>
        <div className="content_container">
          <span>content</span>
        </div>
      </div>
    </div>
  );
}

export default PostSection;
