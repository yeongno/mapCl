import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import useForumSelector from "../../../hook/navSelector/useForumSelector";
import { getPost } from "../../../redux/_actions/post_action";
import { turnForum, turnMenu } from "../../../redux/_actions/turn_action";
import MenuBar_Com from "./menuBar_Com/MenuBar_Com";

function CommunityPage() {
  //todo 커뮤니티 페이지 turnMenu 기본 셋팅은 main이지만 다른 포럼으로 들어갔을 때 해당 값 고정 할 수 있게 새로고침 시 변경 없이 수정
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useForumSelector();
  useEffect(() => {
    // dispatch(turnMenu("COMMUNITY_MENU"));
    dispatch(getPost());

    dispatch(turnMenu("SETCOMMUNITY_MENU"));
    //첫 CommunityPage 컴포넌트 진입시 메인으로 잡고
    //그 이후는 자식 포럼 컴포넌트에서 첫 마운트 시 해당 컴포넌트로 새로고침 해도 고정 될 수 있게 turnForum사용
    navigate("/communityPage/main");
  }, []);

  return (
    <div>
      <div className="landingPage-container">
        {/* <MenuBar_Com /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default CommunityPage;
