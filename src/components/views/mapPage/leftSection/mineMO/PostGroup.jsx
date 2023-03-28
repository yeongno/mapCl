import {
  ArrowDownOutlined,
  ArrowRightOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
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
import "../../../../styles/mapPage/leftSection/postGroup/PostGroup.scss";

function PostGroup() {
  //각 Ref는 개별적인 요소 값을 변경하기 위해 배열로 하여 인덱스 값을 전달 받아 처리
  const Title_Ref = useRef([]);
  const Content_Ref = useRef([]);

  const [onAcc, setOnAcc] = useState(true);
  const panel_Ref = useRef();
  const btn_Ref = useRef([]);
  const MyPosts = useMyPosts();
  const [firstPriority, setFirst] = useState(null);
  const [secondPriority, setSecond] = useState(null);
  const [thirdPriority, setThird] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("psopso", MyPosts);
    if (MyPosts) {
      Posts.map((posts, index) => {});

      // setSecond(MyPosts[0].priority[1]);
      // setThird(MyPosts[0].priority[2]);
    }
  }, [MyPosts]);

  //텍스트 hover 효과 (ellipsis해제)
  // const onTitleOver = (index) => {
  //   Title_Ref.current[index].style.textOverflow = "unset";
  //   Title_Ref.current[index].style.whiteSpace = "unset";
  // };
  // const onTitleDown = (index) => {
  //   Title_Ref.current[index].style.textOverflow = "ellipsis";
  //   Title_Ref.current[index].style.whiteSpace = "nowrap";
  // };
  const onContentOver = (index) => {
    Content_Ref.current[index].style.textOverflow = "unset";
    Content_Ref.current[index].style.whiteSpace = "unset";
  };
  const onContentDown = (index) => {
    Content_Ref.current[index].style.textOverflow = "ellipsis";
    Content_Ref.current[index].style.whiteSpace = "nowrap";
  };
  const Posts = MyPosts?.myPosts;
  const renderingPosts = Posts?.map((posts, index) => {
    return (
      <div key={index}>
        {/* <div className="Priority-labelSection">1번 선호지역</div> */}
        <div className="postList-section">
          <div
            className="title-section"
            ref={(el) => (Title_Ref.current[index] = el)}
            // onMouseOver={() => {
            //   onTitleOver(index);
            // }}
            // onMouseOut={() => {
            //   onTitleDown(index);
            // }}
          >
            {posts?.title}
          </div>
          <div className="middler-container">
            <div
              className="content-section"
              ref={(el) => (Content_Ref.current[index] = el)}
              onMouseOver={() => {
                onContentOver(index);
              }}
              onMouseOut={() => {
                onContentDown(index);
              }}
            >
              <span>{posts?.content}</span>
            </div>
            <div
              className="move__btn"
              onClick={() => {
                dispatch(setPostLocation(Posts[index]?.lat, Posts[index]?.lng));
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
      </div>
    );
  });
  const onActive = (index) => {
    const Ref_style = window.getComputedStyle(panel_Ref.current);
    if (Ref_style.getPropertyValue("max-Height") === "0px") {
      // panel_Ref.current.style.maxHeight = "100rem";
      panel_Ref.current.style.maxHeight = "fit-Content";
      setOnAcc(false);
    } else {
      panel_Ref.current.style.maxHeight = "0";
      setOnAcc(true);
    }
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
        <div className="postGroup-bottom" onClick={onActive}>
          {(onAcc && <ArrowDownOutlined />) || <ArrowUpOutlined />}
        </div>
      </div>
    </>
  );
}

export default PostGroup;
