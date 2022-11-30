import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { turnMap } from "../../../../redux/_actions/turn_action";
import InterestedMap from "./maps/InterestedMap";

function RightSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <InterestedMap />
    </div>
  );
}

export default RightSection;
