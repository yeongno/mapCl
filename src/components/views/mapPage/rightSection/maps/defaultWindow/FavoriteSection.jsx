import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../../../../../../axios/Axios";
import { useMyPriority } from "../../../../../../hook/useMyInfo";
import { dev_favorite } from "../../../../../../redux/_actions/dev/Dev_Info_action";

function FavoriteSection(props) {
  const myPriroty = useMyPriority();
  const [nickName, setNickName] = useState();
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location.onlocation);
  const onNickName = (e) => {
    setNickName(e.target.value);
  };
  console.log(`${location?.lat}, ${location?.lng}`);
  console.log(location);
  const onSubmit = () => {
    Axios.post("/place", {
      location: `${location?.lat}, ${location?.lng}`,
    }).then((res) => {
      console.log(res);
    });
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
      <button onClick={onSubmit}>OK</button>
    </div>
  );
}

export default FavoriteSection;
