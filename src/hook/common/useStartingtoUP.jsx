//navigate 사용시 스크롤 위치 최상단에 세팅
//메서드로 사용 또는 초기 함수 선언으로 사용
import React, { useEffect } from "react";

function useStartingtoUP() {
  const up = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => {
    up();
  }, []);

  return up;
}

export default useStartingtoUP;
