import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import useForumSelector from "../../../hook/navSelector/useForumSelector";
import { getPost } from "../../../redux/_actions/post_action";
import { turnForum, turnMenu } from "../../../redux/_actions/turn_action";
import MenuBar_Com from "./menuBar_Com/MenuBar_Com";
import MenuBox from "./menuBox/MenuBox";
import "../../styles/community/CommunityPage.scss";
import useStartingtoUP from "../../../hook/common/useStartingtoUP";

function CommunityPage() {
  useStartingtoUP();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useForumSelector();
  useEffect(() => {
    // dispatch(turnMenu("COMMUNITY_MENU"));
    dispatch(getPost());

    //첫 CommunityPage 컴포넌트 진입시 메인포럼으로 이동 할 수 있게 menuBar에서 설정 하였음으로
    //그 이후는 자식 포럼 컴포넌트에서 첫 마운트 시 해당 컴포넌트로 새로고침 해도 고정 될 수 있게 turnForum사용
    //새로고침 해도 pageLabel이 날라가지 않게 커뮤니티 turnMenu 라벨을 추가 설정
    dispatch(turnMenu("SETCOMMUNITY_MENU"));
  }, []);

  return (
    <div>
      <div className="landingPage-container">
        {/* <MenuBar_Com /> */}
        <div className="communityPage_container">
          <div className="main_section">
            <Outlet />
          </div>
          <div className="menubox_section">
            <MenuBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
