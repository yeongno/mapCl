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

    //맵 페이지
    COMMUNITY_MENU() {
      navigate("/communityPage");
    },
  };

  //해당 맵 스위치 코드
  const executeMenu = (MenuType) => {
    //not a function 오류가 뜸으로 if 걸어둠
    if (menu) MenuValue[MenuType]();
  };
};
export default useMenuSelector;
