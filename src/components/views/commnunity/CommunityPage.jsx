import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useForumSelector from "../../../hook/navSelector/useForumSelector";
import MenuBar_Com from "./menuBar_Com/MenuBar_Com";

function CommunityPage() {
  const navigate = useNavigate();
  useForumSelector();
  return (
    <div>
      <MenuBar_Com />
      <Outlet />
    </div>
  );
}

export default CommunityPage;
