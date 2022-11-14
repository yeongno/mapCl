import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div>
      header
      <button onClick={() => navigate("/login")}>login</button>
      <button onClick={() => navigate("/hello")}>hello</button>
    </div>
  );
}

export default Header;
