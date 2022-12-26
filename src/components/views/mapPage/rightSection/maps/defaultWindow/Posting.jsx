import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dev_Post } from "../../../../../../redux/_actions/dev/Dev_Info_action";
import "../../../../../styles/mapPage/infoWindow/default/Write.scss";
function Posting(props) {
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [place, setPlace] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [pickRange, setPickRange] = useState([]);
  const location = useSelector((state) => state.location.onlocation);
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
    dispatch(
      dev_Post(
        { topic },
        { title },
        { content },
        {
          location: `${location?.lat}, ${location?.lng}`,
        }
      )
    );
    alert(topic + title + content + location);
  };
  return (
    <div className="group-container">
      <div className="topic-container">
        <textarea onChange={onTopic}></textarea>
      </div>
      <div className="title-container">
        <textarea onChange={onTitle}></textarea>
      </div>
      <div className="content-container">
        <textarea onChange={onContent}></textarea>
      </div>

      <div className="submit-container">
        <button onClick={onSubmit}>OK</button>
      </div>
    </div>
  );
}

export default Posting;
