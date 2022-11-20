// import { useEffect } from "react";
// import useMyInfo from "../../../hook/useMyInfo";
// import { PRIORITY_MAP } from "../types";

import { useEffect } from "react";
import { PRIORITY_MAP } from "../types";

export function PriorityMap(data) {
  console.log("priority", data);

  //   useEffect(() => {
  //     executeCtr(data);
  //   }, [data]);
  //   //   const dispatch = useDispatch();
  //   const useMyInfo = useMyInfo();
  //   const navValue = {
  //     FIRST_MARK() {
  //       console.log("priority", data);
  //       // dispatch(setLocation())
  //     },
  //     FIRST_ADD() {
  //       return {
  //         type: PRIORITY_MAP,
  //         payload: data,
  //       };
  //     },
  //   };
  //   //해당 맵 스위치 코드
  //   const executeCtr = (PRIORITY) => {
  //     //not a function 오류가 뜸으로 if 걸어둠
  //     if (data) navValue[PRIORITY]();
  //   };
  return {
    type: PRIORITY_MAP,
    payload: data,
  };
}
