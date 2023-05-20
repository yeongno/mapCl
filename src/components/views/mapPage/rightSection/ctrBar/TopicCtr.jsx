import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { turnTopicCtr } from "../../../../../redux/_actions/turn_action";
import "../../../../styles/mapPage/rightSection/TopicCtr.scss";
function TopicCtr() {
  const General_Ref = useRef();
  const AdPosts_Ref = useRef();
  const [onGeneral, setGeneral] = useState(true);
  const [onAdPosts, setAdPosts] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    General_Ref.current.style.background = "blue";
    General_Ref.current.style.color = "white";
    AdPosts_Ref.current.style.background = "lightgray";
    AdPosts_Ref.current.style.color = "black";
    dispatch(turnTopicCtr(false));
  }, []);
  const OnGeneral = () => {
    setGeneral(true);
    setAdPosts(false);
    dispatch(turnTopicCtr(false));
    General_Ref.current.style.background = "blue";
    General_Ref.current.style.color = "white";
    AdPosts_Ref.current.style.background = "lightgray";
    AdPosts_Ref.current.style.color = "black";
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };
  const OnAdPosts = () => {
    AdPosts_Ref.current.style.background = "blue";
    AdPosts_Ref.current.style.color = "white";
    General_Ref.current.style.background = "lightgray";
    General_Ref.current.style.color = "black";
    dispatch(turnTopicCtr(true));
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="topicCtr-container">
      <div className="topicCtr-wrapper">
        <div className="general-section" onClick={OnGeneral} ref={General_Ref}>
          <span>자유글</span>
        </div>
        <div className="adPosts-section" onClick={OnAdPosts} ref={AdPosts_Ref}>
          <span>모집글</span>
        </div>
      </div>
    </div>
  );
}

export default TopicCtr;
