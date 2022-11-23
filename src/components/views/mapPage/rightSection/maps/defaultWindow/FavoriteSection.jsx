import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useMyPriority } from "../../../../../../hook/useMyInfo";
import { dev_favorite } from "../../../../../../redux/_actions/dev/Dev_Info_action";

function FavoriteSection(props) {
  const myPriroty = useMyPriority();
  const [nickName, setNickName] = useState();
  const dispatch = useDispatch();
  const onNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <div
        onClick={() => {
          props.setOnPosition(null);
        }}
      >
        x
      </div>
      <input onChange={onNickName} />
      {(myPriroty[0].nickName && <>1: true</>) || (
        <div
          onClick={() => {
            dispatch(dev_favorite(nickName, 0));
          }}
        >
          1:false
        </div>
      )}{" "}
      {(myPriroty[1].nickName && <>2: true</>) || <>2:false</>}{" "}
      {(myPriroty[2].nickName && <>3: true</>) || (
        <span
          onClick={() => {
            dispatch(dev_favorite(nickName, 3));
          }}
        >
          3:false
        </span>
      )}
    </div>
  );
}

export default FavoriteSection;
