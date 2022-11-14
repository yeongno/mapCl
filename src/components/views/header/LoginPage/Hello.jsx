import React from "react";
import { useEffect } from "react";

function Hello({ handleLogout }) {
  useEffect(() => {
    handleLogout();
  }, []);

  return <div>Hello</div>;
}

export default Hello;
