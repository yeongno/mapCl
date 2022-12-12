import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useMapList } from "../../../../../hook/useMyInfo";

function UserList() {
  const mapList = useMapList();

  return (
    <div>
      {mapList && (
        <div>
          {" "}
          {mapList.map((mapList, index) => (
            <div key={index}>{mapList?.location}</div>
          ))}
        </div>
      )}
      {mapList && (
        <div>
          {" "}
          {mapList.map((mapList, index) => (
            <div key={index}>{mapList?.location}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserList;
