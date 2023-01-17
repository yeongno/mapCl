import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { turnMenu } from "../../redux/_actions/turn_action";
const useMenuSelector = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state?.turn?.turnMenu);
  useEffect(() => {
    // executeMenu("MAIN_MENU");
    // dispatch(turnMenu("MAIN_MENU"));
  }, []);
  useEffect(() => {
    executeMenu(menu);
  }, [menu]);
  const MenuValue = {
    //맵 페이지
    MAP_MENU() {
      navigate("/mapPage");
    },
    //메인 페이지
    MAIN_MENU() {
      navigate("/mainPage");
    },

    //커뮤니티 페이지
    COMMUNITY_MENU() {
      //우선 기본 페이지가 올 수 있게 설정
      navigate("/communityPage");
    },
    //커뮤니티 기본 픽 페이지
    SETCOMMUNITY_MENU() {
      //클릭 하였을 때는 위의 코드 실행
      //기본 마운트 dispatch코드로 해당 빈 코드 실행
      //하여 pageLabel 나올 수 있게 함
    },
    //Test 페이지
    TEST_MENU() {
      //우선 기본 페이지가 올 수 있게 설정
      navigate("/test");
    },
  };

  //해당 맵 스위치 코드
  const executeMenu = (MenuType) => {
    //not a function 오류가 뜸으로 if 걸어둠
    if (menu) MenuValue[MenuType]();
  };
};
export default useMenuSelector;
