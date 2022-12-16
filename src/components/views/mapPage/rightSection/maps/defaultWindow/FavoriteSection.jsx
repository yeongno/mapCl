import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../../../../../../axios/Axios";
import useLocationFormat from "../../../../../../hook/formatter/useLocationFormat";
import { useMyPriority } from "../../../../../../hook/useMyInfo";
import { dev_favorite } from "../../../../../../redux/_actions/dev/Dev_Info_action";
import "../../../../../styles/mapPage/infoWindow/default/FavoriteSection.scss";
function FavoriteSection(props) {
  const myPriroty = useMyPriority();
  const [nickName, setNickName] = useState();
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location.onlocation);
  const onNickName = (e) => {
    setNickName(e.target.value);
  };
  const onSubmit = () => {
    Axios.post(
      "/place",
      {
        location: `${location?.lat}, ${location?.lng}`,
      },
      {
        headers: {
          jwt_access_token: localStorage.getItem("token"),
        },
      }
    ).then((res) => {
      // useLocationFormat();
      axios
        .post("/place/list", {
          location: `${location?.lat}, ${location?.lng}`,
          numPoints: 2,
          radius: 1000,
        })
        .then((res) => {});
    });
  };
  return (
    <div className="favoriteSection-container">
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
