import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dev_Group } from "../../../../../../redux/_actions/dev/Dev_Info_action";

function Group(props) {
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onTopic = (e) => {
    setTopic(e.target.value);
  };
  const onTitle = (e) => {
    setTitle(e.target.value);
  };
  const onContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    dispatch(dev_Group(topic, title, content));
  };
  return (
    <div>
      <input onChange={onTopic}></input>
      <input onChange={onTitle}></input>
      <input onChange={onContent}></input>
      <button onClick={onSubmit}>OK</button>
    </div>
  );
}

export default Group;
