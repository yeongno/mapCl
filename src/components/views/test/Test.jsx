import axios from "axios";
import { slice } from "lodash";
import React, { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Axios from "../../../axios/Axios";
import useLocationFormat from "../../../hook/formatter/useLocationFormat";
import useTestSelector from "../../../hook/navSelector/useTestSelector";
import MenuBar_Test from "./menuBar_Test/MenuBar_Test";

function Test() {
  useTestSelector();
  return (
    <div>
      <MenuBar_Test />
      <Outlet />
    </div>
  );
}

export default Test;
