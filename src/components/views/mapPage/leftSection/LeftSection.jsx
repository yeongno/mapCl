import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { turnMap } from "../../../../redux/_actions/turn_action";
import FavoriteGroup from "./FavoriteGroup/FavoriteGroup";

function LeftSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const onDefault = () => {
    dispatch(turnMap("DEFAULT_MAP"));
  };
  const onRelation = () => {
    dispatch(turnMap("REL_MAP"));
  };
  const onTest = () => {
    dispatch(turnMap("TEST_MAP"));
  };
  const onNear = () => {
    dispatch(turnMap("NEAR_MAP"));
  };

  const onInterested = () => {
    dispatch(turnMap("INTERESTED_MAP"));
  };
  return (
    <div className="leftSection-container">
      <div className="leftSection-btnContainer">
        {/* <button className="btn__right--default" onClick={onDefault}>
          기본
        </button>
        <button className="btn__right--chat" onClick={onRelation}>
          주변인
        </button>
        <button className="btn__right--test" onClick={onTest}>
          TEST
        </button>
        <button className="btn__right--test" onClick={onNear}>
          Near
        </button>
        <button className="btn__right--test" onClick={onInterested}>
          Interested Spot
        </button> */}
        <FavoriteGroup />
      </div>
    </div>
  );
}

export default LeftSection;
