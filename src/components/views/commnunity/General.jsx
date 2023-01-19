import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../../redux/_actions/post_action";
import "../../styles/community/general/General.scss";
import LabelBar from "./labelBar/LabelBar";
import { turnForum } from "../../../redux/_actions/turn_action";
import GenerList from "./common/renderList/GenerList";

function General() {
  const forum = useSelector((state) => state?.turn?.turnForum);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost());
    dispatch(turnForum("GENERAL_FORUM"));
  }, []);

  return (
    <div className="general_container">
      <div className="generalList_container">
        <LabelBar forum={forum} />
        <GenerList />
      </div>
    </div>
  );
}

export default General;
