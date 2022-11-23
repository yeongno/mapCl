import React from "react";
import { useMyPriority } from "../../../../../../hook/useMyInfo";

function FavoriteSection(props) {
  const myPriroty = useMyPriority();
  console.log("mypriority", myPriroty);
  return (
    <div>
      <div
        onClick={() => {
          props.setOnPosition(null);
        }}
      >
        x
      </div>
      <input />
      {(myPriroty[0].nickName && <>1: true</>) || <>1:false</>}{" "}
      {(myPriroty[1].nickName && <>2: true</>) || <>2:false</>}{" "}
      {(myPriroty[2].nickName && <>3: true</>) || <>3:false</>}
    </div>
  );
}

export default FavoriteSection;
