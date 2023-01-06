import React, { useEffect, useState } from "react";
import { DoubleRightOutlined } from "@ant-design/icons";
import "../../../styles/community/main/MiniGeneral.scss";
function MiniGeneral() {
  const [generalList, setGeneralList] = useState([]);
  const renderCards = generalList.map((Post, index) => {
    return (
      <div className="miniGeneralList-container">
        <span>제목 {index}</span>
        <br />
        <span>내용 {index}</span>
      </div>
    );
  });
  //generalList 세팅
  useEffect(() => {
    for (let a = 0; a < 5; a++) {
      generalList[a] = a;
      setGeneralList(generalList);
    }
  }, []);
  return (
    <div className="miniGeneral-container">
      <div className="miniGeneral-wrapper">
        <div className="miniGeneralLabel-container">
          <span>인기 자유 게시글</span>
          <span>
            <DoubleRightOutlined />
          </span>
        </div>
        {renderCards}
      </div>
    </div>
  );
}

export default MiniGeneral;
