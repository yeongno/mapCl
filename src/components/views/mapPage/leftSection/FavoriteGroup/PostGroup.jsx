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
import { setLocation } from "../../../../../redux/_actions/mapNav/location_action";
import { PriorityMap } from "../../../../../redux/_actions/mapNav/priority_action";
import "../../../../styles/mapPage/leftSection/postGroup/PostGroup.scss";

function PostGroup() {
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
  const Posts = MyPosts.myPosts;
  const landeringPosts = Posts.map((posts, index) => {
    console.log("title", posts);
    return (
      <>
        {" "}
        <div className="postGroup-panel" ref={panel_Ref}>
          {/* <div className="Priority-labelSection">1번 선호지역</div> */}
          <div className="Priority-section">
            <div className="nameLabel">{posts?.title}</div>
            {"  "}
            <div className="Priority-nickSection">{posts?.content}</div>
            <div
              className="move__btn"
              // onClick={() => {
              //   dispatch(setLocation(firstPriority?.lat, firstPriority?.lng));
              // }}
            >
              <ArrowRightOutlined />
            </div>
          </div>
          <div className="ctrSection">
            <div className="ctrSection__btn--delete">X</div>
            <div className="ctrSection__btn--modify">Modify</div>
          </div>
        </div>
      </>
    );
  });
  const onActive = (index) => {
    const Ref_style = window.getComputedStyle(panel_Ref.current);
    if (Ref_style.getPropertyValue("max-Height") === "0px") {
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
        {landeringPosts}
        <div className="postGroup-bottom" onClick={onActive}>
          {(onAcc && <ArrowDownOutlined />) || <ArrowUpOutlined />}
        </div>
      </div>
    </>
  );
}

export default PostGroup;
