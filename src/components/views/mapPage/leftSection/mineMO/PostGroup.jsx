import {
  ArrowDownOutlined,
  ArrowRightOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { Pagination } from "antd";
import { indexOf } from "lodash";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import useMyInfo, { useMyPosts } from "../../../../../hook/useMyInfo";
import {
  setLocation,
  setPostLocation,
} from "../../../../../redux/_actions/mapNav/location_action";
import { PriorityMap } from "../../../../../redux/_actions/mapNav/priority_action";
import { turn_mrFilter } from "../../../../../redux/_actions/turn_action";
import "../../../../styles/mapPage/leftSection/postGroup/PostGroup.scss";

function PostGroup({ setAccActive, accActive }) {
  //각 Ref는 개별적인 요소 값을 변경하기 위해 배열로 하여 인덱스 값을 전달 받아 처리
  const Title_Ref = useRef([]);
  const Content_Ref = useRef([]);

  //mineMo의 다른 그룹 Acc가 열릴경우 해당 값 true로 변경
  const [otherAcc, setOtehrAcc] = useState(false);

  //textOverFlow- 이전에 열었던 텍스트 닫기 위한 값
  const [preContentIndex, setPreContentIndex] = useState();
  //textOverFlow- 이전에 열었던 텍스트 닫기 위한 값
  const [preTitleIndex, setPreTitleIndex] = useState();

  //pagination의 현재 페이지 값값
  const [pagination, setpagination] = useState(1);

  //하단의 아코디언이 열리고 닫는 표시인 arrow마크 관리 값
  const [onAcc, setOnAcc] = useState(true);
  const panel_Ref = useRef();
  const btn_Ref = useRef([]);
  const MyPosts = useMyPosts();

  const dispatch = useDispatch();

  //title 열고 닫는 플러그 함수
  const onTitleView = (index) => {
    Title_Ref.current[index].style.textOverflow = "unset";
    Title_Ref.current[index].style.whiteSpace = "unset";
    //전에 클릭했던 index를 다시 닫는다.
    if (preTitleIndex || preContentIndex == 0) {
      Title_Ref.current[preTitleIndex].style.textOverflow = "ellipsis";
      Title_Ref.current[preTitleIndex].style.whiteSpace = "nowrap";
    }
    setPreTitleIndex(index);
  };

  //content 열고 닫는 플러그 함수
  const onContentView = (index) => {
    Content_Ref.current[index].style.textOverflow = "unset";
    Content_Ref.current[index].style.whiteSpace = "unset";
    //전에 클릭했던 index를 다시 닫는다.
    if (preContentIndex || preContentIndex == 0) {
      Content_Ref.current[preContentIndex].style.textOverflow = "ellipsis";
      Content_Ref.current[preContentIndex].style.whiteSpace = "nowrap";
    }
    setPreContentIndex(index);
  };

  const Posts = MyPosts?.myPosts;
  const renderingPosts = Posts?.map((posts, index) => {
    return (
      <div key={index}>
        {" "}
        {(index >= (pagination - 1) * 5 && index < pagination * 5 && (
          <div key={index}>
            {/* <div className="Priority-labelSection">1번 선호지역</div> */}
            <div className="postList-section">
              <div
                className="title-section"
                ref={(el) => (Title_Ref.current[index] = el)}
                onClick={() => {
                  onTitleView(index);
                }}
              >
                {posts?.title}
              </div>
              <div className="middler-container">
                <div
                  className="content-section"
                  ref={(el) => (Content_Ref.current[index] = el)}
                  onClick={() => {
                    onContentView(index);
                  }}
                >
                  <span>{posts?.content}</span>
                </div>
                <div
                  className="move__btn"
                  onClick={() => {
                    dispatch(
                      setPostLocation(Posts[index]?.lat, Posts[index]?.lng)
                    );
                    dispatch(turn_mrFilter("POSTMR_FILTER"));
                  }}
                >
                  <ArrowRightOutlined />
                </div>
              </div>{" "}
            </div>
            <div className="ctrSection">
              <div className="ctrSection__btn--delete">X</div>
              <div className="ctrSection__btn--modify">Modify</div>
            </div>

            <div className="bottom_padding"></div>
          </div>
        )) || <></>}
      </div>
    );
  });

  //mineMo의 다른 그룹이 열릴 경우 해당 Acc 닫기
  useEffect(() => {
    if (accActive && otherAcc) {
      panel_Ref.current.style.maxHeight = "0";
      setOnAcc(true);
    }
    //다른 그룹에서  accActive값이 바뀌면 otherAcc 값 변경
    setOtehrAcc(true);
  }, [accActive]);

  const onActive = (index) => {
    const Ref_style = window.getComputedStyle(panel_Ref.current);
    if (Ref_style.getPropertyValue("max-Height") === "0px") {
      setOtehrAcc(false);
      setAccActive(true);
      panel_Ref.current.style.maxHeight = "fit-Content";
      setOnAcc(false);
    } else {
      panel_Ref.current.style.maxHeight = "0";
      setOnAcc(true);
    }
  };

  //pagination controler
  const onPagination = (page) => {
    setpagination(page);
  };
  return (
    <>
      <div className="postGroup-accordian">
        <div
          className="postGroup-accordian__btn--turn"
          // ref={(el) => (btn_Ref.current[index] = el)}
          // onClick={() => {
          //   onActive(index);
          // }}
          ref={btn_Ref}
          onClick={onActive}
        >
          나의 글
        </div>{" "}
        <div className="postGroup-panel" ref={panel_Ref}>
          {renderingPosts}
        </div>
        {!onAcc && (
          <div className="pagination-section">
            <Pagination
              current={pagination}
              onChange={onPagination}
              total={Posts?.length}
              pageSize={5}
            />
          </div>
        )}
        <div className="postGroup-bottom" onClick={onActive}>
          {(onAcc && <ArrowDownOutlined />) || <ArrowUpOutlined />}
        </div>
      </div>
    </>
  );
}

export default PostGroup;
