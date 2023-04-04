import { Radio } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useMarkFilterSelector from "../../../../../../hook/mapPage/useMarkFilterSelector";
import { turn_mrFilter } from "../../../../../../redux/_actions/turn_action";

/**
 * mark 필터 radio 컴포넌트로 관리
 * 상위 컴포넌트의 setMarkFilter에 markFilter를 전달하여 각 MR을 비/활성화 해준다.
 */
const RadioMark = () => {
  const dispatch = useDispatch();
  const nowFilter = useMarkFilterSelector();

  const [nowValue, setNowValue] = useState("favorite");

  useEffect(() => {
    if (nowFilter.post == true) {
      setNowValue("post");

      console.log("a");
    } else if (nowFilter.favorite == true) {
      setNowValue("post");
      console.log("b");
    } else if (nowFilter.ad == true) {
      setNowValue("ad");
      console.log("c");
    }
  }, [nowFilter]);

  const onChange = (e) => {
    const value = e.target.value;
    if (value == "favorite") {
      dispatch(turn_mrFilter("FAVORITEMR_FILTER"));
    } else if (value == "post") {
      dispatch(turn_mrFilter("POSTMR_FILTER"));
    } else if (value == "ad") {
      dispatch(turn_mrFilter("ADMR_FILTER"));
    }
  };
  return (
    <div
      className="radioMark-container"
      style={{ position: "absolute", zIndex: "21", top: "4rem", left: "70%" }}
    >
      <Radio.Group onChange={onChange} defaultValue={nowValue}>
        <Radio.Button value="favorite" autoFocus={nowFilter.favorite}>
          선호 위치
        </Radio.Button>
        <Radio.Button value="post" autoFocus={nowFilter.post}>
          자유 글
        </Radio.Button>
        <Radio.Button value="ad" autoFocus={nowFilter.ad}>
          모집 글
        </Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default RadioMark;
