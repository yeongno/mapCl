import React from "react";
import "../../../../styles/community/detailPost/commentSection/CommentSection.scss";
function CommentSection() {
  return (
    <div className="commentSection_container">
      <div className="partition" />
      <div className="commentSection_wrapper">
        {/* 프로필 이미지, 작성자, 댓글 날짜 */}
        <div className="topSection_container">
          {/* 이미지 */}
          <div className="topLeftSection_container">
            <div></div>
          </div>
          {/* 작성자, 댓글 날짜 */}
          <div className="topRightSection_container">
            <span>작성자</span>
            <br />
            <span>2022.02.22</span>
          </div>
        </div>
        {/* 댓글 내용 */}
        <div className="middleSection_container">
          <span>댓글 내용</span>
        </div>
        {/* 답글 추천 및 답글 달기 섹션 */}
        <div className="bottomSection_container">
          {/* 답글 내용 */}
          <div className="bottomLeftSection_container"></div>
          {/* 답글 추천 및 추가 기능 섹션 */}
          <div className="bottomRightsection_container"></div>
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
