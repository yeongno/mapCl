import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dev_Group } from "../../../../../../redux/_actions/dev/Dev_Info_action";
import "../../../../../styles/mapPage/infoWindow/default/Group.scss";
import Calendar1 from "../../../../common/Calendar1";
function Group(props) {
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [place, setPlace] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [pickRange, setPickRange] = useState([]);
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
  const onPlace = (e) => {
    setPlace(e.target.value);
  };
  const onSubmit = () => {
    dispatch(dev_Group(topic, title, content, place, pickDate, pickRange));
    alert(topic + title + content + place + pickDate + pickRange);
  };
  return (
    <div className="group-container">
      <div className="topic-container">
        <textarea onChange={onTopic}></textarea>
      </div>
      <div className="title-container">
        <textarea onChange={onTitle}></textarea>
        <Calendar1 setPickDate={setPickDate} setPickRange={setPickRange} />
      </div>
      <div className="content-container">
        <textarea onChange={onContent}></textarea>
      </div>
      <div className="place-container">
        <textarea onChange={onPlace}></textarea>
        <div className="submit-container">
          <button onClick={onSubmit}>OK</button>
        </div>
      </div>
    </div>
  );
}

export default Group;
