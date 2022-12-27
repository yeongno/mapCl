import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import useForumSelector from "../../../hook/navSelector/useForumSelector";
import { getPost } from "../../../redux/_actions/post_action";
import MenuBar_Com from "./menuBar_Com/MenuBar_Com";

function CommunityPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useForumSelector();
  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <div>
      <div className="landingPage-container">
        <MenuBar_Com />
        <Outlet />
      </div>
    </div>
  );
}

export default CommunityPage;
