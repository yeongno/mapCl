import { RedoOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMapList } from "../../../../../hook/useMyInfo";
import useNearByUsers from "../../../../../hook/useNearByUsers";
import useNearByUsersList from "../../../../../hook/useNearByUsersList";
import { setMapList } from "../../../../../redux/_actions/mapList/mapList_action";
import "../../../../styles/mapPage/rightSection/CtrBar.scss";
function CtrBar() {
  const NearByUsers = useNearByUsersList();
  const dispatch = useDispatch();
  const onList = () => {
    dispatch(setMapList(NearByUsers));
  };
  return (
    <div className="ctrBar-container">
      <div className="ctrBar__btn--refresh" onClick={onList}>
        <RedoOutlined />
      </div>
    </div>
  );
}

export default CtrBar;
