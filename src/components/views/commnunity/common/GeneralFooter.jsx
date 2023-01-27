import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { ceil, floor, result } from "lodash";
import React, { useEffect, useState } from "react";
import "../../../styles/community/common/GeneralFooter.scss";
function GeneralFooter(props) {
  const [Paging, setPaging] = useState(0);

  //페이지의 10의 자리 값
  const [nowPaging, setNowPaging] = useState(0);

  //총 page 수
  const [PagingArray, setPagingArray] = useState([]);

  const [Result, setResult] = useState();

  //현재 페이지의 1의 자리 값
  const [NowIndex, setNowIndex] = useState(0);

  const onThisPaging = (index, nowPaging) => {
    if (index >= 10) {
      const result = (1 + nowPaging) * 10;
      props.setThisPaging(result);
      setNowIndex(index);
      setResult(result);
    } else {
      const ten = nowPaging * 10;
      const one = index + 1;
      const result = ten + one;
      setResult(result);
      props.setThisPaging(result);
      setNowIndex(index);
    }
  };
  const onNextPage = () => {
    if (floor(Paging / 10) <= nowPaging) {
    } else {
      setNowPaging(nowPaging + 1);
      props.setThisPaging((nowPaging + 1) * 10 + 1);
      setNowIndex(0);
    }
    console.log(nowPaging);
  };
  const onPrePage = () => {
    if (floor(Paging / 10) < nowPaging || nowPaging === 0) {
    } else {
      setNowPaging(nowPaging - 1);
      props.setThisPaging((nowPaging - 1) * 10 + 1);
    }
    setNowIndex(0);
  };

  //포럼이 바뀔 때 마다 페이지 값 초기화
  useEffect(() => {
    setNowIndex(0);
    setNowPaging(0);

    // 총 페이지 수를 체크 하기 위함.
    // 해당 페이지의 게시물 수 만큼 나눠서 총 페이지 값을 측정
    setPaging(ceil(props.LastIndex / 10));
    for (let i = 0; i < props.LastIndex; i++) {
      PagingArray[i] = 0;
      if (i === props.LastIndex - 1) {
        setPagingArray(PagingArray);
      }
    }
  }, [props.ThisTopic, props.LastIndex]);

  const renderCards = PagingArray.map((paging, index) => {
    if (index >= Paging - nowPaging * 10) {
      return;
    }

    //페이지 넘버 10의 자리가 0일 때의 pagination
    if (nowPaging === 0) {
      for (index; index < 10; index++) {
        // 해당 pagination 누르면 스타일 변경(선택 페이지 넘버)
        if (NowIndex === index) {
          return (
            <p key={index} className="pickedNumber__btn">
              {index + 1}
            </p>
          );
        }
        return (
          //현재 페이지 값 외의 값들
          <p
            className="otherNumber__btn"
            key={index}
            onClick={() => {
              onThisPaging(index, nowPaging);
            }}
          >
            {index + 1}
          </p>
        );
      }
    }
    //10의 자리가 있을 때의 pagination
    if (nowPaging) {
      for (index; index < 10; index++) {
        //해당 pagination 누르면 스타일 변경
        if (NowIndex === index) {
          return (
            <p key={index} className="pickedNumber__btn">
              {nowPaging * 10 + index + 1}
            </p>
          );
        }
        //행의 마지막 pagination은 십의 자리가 바뀌므로 해당 구현 코드.
        if (index === 9 && nowPaging !== floor(Paging / 10)) {
          return (
            <p
              key={index}
              onClick={() => {
                onThisPaging(index, nowPaging);
              }}
              className="otherNumber__btn"
            >
              {nowPaging + 1}0
            </p>
          );

          //마지막 pagination이 아닌 나머지 구현 코드.
        } else if (index !== 9 || nowPaging === floor(Paging / 10)) {
          if (index >= Paging - nowPaging * 10) {
            return;
          }
          return (
            <p
              key={index}
              onClick={() => {
                onThisPaging(index, nowPaging);
              }}
              className="otherNumber__btn"
            >
              {nowPaging}
              {index + 1}
            </p>
          );
        }
      }
    }
  });
  return (
    <div className="footerContainer_LeftSection">
      <div className="paginationSection_LeftSection">
        <LeftOutlined onClick={onPrePage} />
        <div className="paginationBar_LeftSection">{renderCards}</div>
        <RightOutlined onClick={onNextPage} />
      </div>
      {/* <SearchBar /> */}
    </div>
  );
}

export default GeneralFooter;
