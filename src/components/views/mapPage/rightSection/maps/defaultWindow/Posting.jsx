import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { dev_Post } from "../../../../../../redux/_actions/dev/Dev_Info_action";

function Posting() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onTitle = (e) => {
    setTitle(e.target.value);
  };
  const onContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    dispatch(dev_Post(title, content));
  };
  return (
    <div>
      <input onChange={onTitle}></input>
      <input onChange={onContent}></input>
      <button onClick={onSubmit}>OK</button>
    </div>
  );
}

export default Posting;
